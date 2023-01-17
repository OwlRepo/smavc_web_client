import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { Button, Label, Select, Spinner, TextInput } from 'flowbite-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { TbFileCheck } from 'react-icons/tb';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function EnrollmentPortal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [strands, setStrands] = React.useState([]);

  const getStrands = (res) => setStrands(res);

  const [isFetchingData, setIsFetchingData] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState();
  const [successMessage, setSuccessMessage] = React.useState();

  function submitEnrollmentForm(formData) {
    axios
      .post('https://smacv.onrender.com/api/assessment/submit', formData)
      .then((_) => setSuccessMessage('Enrollment Form Submitted!'))
      .catch((err) =>
        setErrorMessage(JSON.stringify(err.response.data.message, 0, 2))
      );
    // .catch((err) => alert(JSON.stringify(err.response.data.message, 0, 2)));
  }

  React.useEffect(() => {
    setIsFetchingData(true);
    axios
      .post('https://smacv.onrender.com/api/strand/search')
      .then((res) => {
        getStrands(res?.data.data);
        setIsFetchingData(false);
      })
      .catch((err) => {
        setIsFetchingData(false);
        setErrorMessage(err?.message);
      });
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Enrollment Portal' />
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col'>
            <div className='mt-16 rounded'>
              <h1 className='text-md md:text-5xl'>
                <span className='bg-gradient-to-r from-primary-500 to-yellow-500 bg-clip-text text-transparent '>
                  Enrollment Portal
                </span>
              </h1>
              <p className='text-grey pt-5 text-justify text-xs md:text-xl'>
                Kindly fill out the form below and we will react out to you as
                soon as we can.
              </p>
            </div>
            {successMessage ? (
              <div className='my-16 rounded-lg bg-gray-100 p-5 text-white shadow-lg'>
                <div className='m-10 flex flex-col items-center text-black'>
                  <TbFileCheck
                    size={150}
                    className='drop-shadow-glow mb-5 text-green-500'
                  />
                  <h1 className='mb-5 text-green-500'>Form Submitted!</h1>
                  <p>
                    Your enrollment form has been submitted and the school will
                    contact you as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <div className='my-16 rounded-lg bg-gray-100 p-5 text-white shadow-lg'>
                {isFetchingData ? (
                  <div className='m-10 flex flex-col items-center text-black'>
                    <Spinner
                      color='info'
                      aria-label='Info spinner example'
                      size='xl'
                    />
                    <h5>Loading Form...</h5>
                  </div>
                ) : !errorMessage ? (
                  <form onSubmit={handleSubmit(submitEnrollmentForm)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    {/* <input defaultValue='test' {...register('example')} /> */}

                    {/* include validation with required or other standard HTML validation rules */}
                    {/* <input {...register('exampleRequired', { required: true })} /> */}
                    {/* errors will return when field validation fails  */}
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}

                    <div>
                      <div className='mb-2 block'>
                        <Label htmlFor='strandId' value='Strand' />
                      </div>
                      <Select
                        {...register('strandId', { required: true })}
                        required={true}
                      >
                        <option value='' disabled selected>
                          Select your strand
                        </option>
                        {strands?.map((strand) => (
                          <option
                            key={strand}
                            value={strand.id}
                          >{`${strand.acronym} - ${strand.name}`}</option>
                        ))}
                      </Select>
                    </div>

                    <div className='mt-3'>
                      <div className='mb-2 block'>
                        <Label htmlFor='emailAddress' value='Student Email' />
                      </div>
                      <TextInput
                        type='email'
                        placeholder='name@flowbite.com'
                        shadow={true}
                        {...register('emailAddress', { required: true })}
                      />
                    </div>

                    <div className='mt-3'>
                      <div className='mb-2 block'>
                        <Label htmlFor='firstName' value='Student First Name' />
                      </div>
                      <TextInput
                        type='text'
                        placeholder='Juan'
                        shadow={true}
                        {...register('firstName', {
                          required: true,
                          validate: (val) => {
                            return /^[a-zA-Z]+$/.test(val)
                              ? undefined
                              : 'Numbers and special characters are not allowed.';
                          },
                        })}
                      />
                      <p className='border-l-2 border-red-900 bg-red-200 text-sm text-red-700'>
                        <ErrorMessage errors={errors} name='firstName' />
                      </p>
                    </div>

                    <div className='mt-3'>
                      <div className='mb-2 block'>
                        <Label htmlFor='lastName' value='Student Last Name' />
                      </div>
                      <TextInput
                        type='text'
                        placeholder='Dela Cruz'
                        shadow={true}
                        {...register('lastName', {
                          required: true,
                          validate: (val) => {
                            return /^[a-zA-Z]+$/.test(val)
                              ? undefined
                              : 'Numbers and special characters are not allowed.';
                          },
                        })}
                      />
                      <p className='border-l-2 border-red-900 bg-red-200 text-sm text-red-700'>
                        <ErrorMessage errors={errors} name='lastName' />
                      </p>
                    </div>

                    <div className='mt-3'>
                      <div className='mb-2 block'>
                        <Label
                          htmlFor='middleName'
                          value='Student Middle Name'
                        />
                      </div>
                      <TextInput
                        type='text'
                        placeholder='Miguel '
                        shadow={true}
                        {...register('middleName', {
                          required: true,
                          validate: (val) => {
                            return /^[a-zA-Z]+$/.test(val)
                              ? undefined
                              : 'Numbers and special characters are not allowed.';
                          },
                        })}
                      />
                      <p className='border-l-2 border-red-900 bg-red-200 text-sm text-red-700'>
                        <ErrorMessage errors={errors} name='middleName' />
                      </p>
                    </div>

                    <div className='mt-3'>
                      <div className='mb-2 block'>
                        <Label htmlFor='guardianName' value='Guardian Name' />
                      </div>
                      <TextInput
                        type='text'
                        placeholder='Juan'
                        shadow={true}
                        {...register('guardianName', {
                          required: true,
                          validate: (val) => {
                            return /^[a-zA-Z]+$/.test(val)
                              ? undefined
                              : 'Numbers and special characters are not allowed.';
                          },
                        })}
                      />
                      <p className='border-l-2 border-red-900 bg-red-200 text-sm text-red-700'>
                        <ErrorMessage errors={errors} name='guardianName' />
                      </p>
                    </div>

                    <div className='mt-3'>
                      <div className='mb-2 block'>
                        <Label
                          htmlFor='guardianContact'
                          value='Guardian Contact No.'
                        />
                      </div>
                      <TextInput
                        type='number'
                        placeholder='09*********'
                        shadow={true}
                        {...register('guardianContact', { required: true })}
                      />
                    </div>

                    <div className='mt-3'>
                      <div className='mb-2 block'>
                        <Label
                          htmlFor='guardianRelationship'
                          value='Guardian Relationship'
                        />
                      </div>
                      <Select
                        {...register('guardianRelationship', {
                          required: true,
                        })}
                        required={true}
                      >
                        {[
                          'mother',
                          'father',
                          'brother',
                          'sister',
                          'grandmother',
                          'grandfather',
                          'uncle',
                          'aunt',
                        ].map((data) => (
                          <option key={data} value={data}>
                            {data.charAt(0).toUpperCase() + data.slice(1)}
                          </option>
                        ))}
                      </Select>
                    </div>

                    <Button className='my-5 min-w-full' type='submit'>
                      Submit Form
                    </Button>
                  </form>
                ) : (
                  <div className='m-10 flex flex-col items-center text-black'>
                    <RiAlarmWarningFill
                      size={60}
                      className='drop-shadow-glow animate-flicker text-red-500'
                    />
                    <h5 className='mt-10'>{errorMessage}</h5>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
