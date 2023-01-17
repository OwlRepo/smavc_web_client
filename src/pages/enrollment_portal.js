import axios from 'axios';
import { Button, Label, Select, Spinner, TextInput } from 'flowbite-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function EnrollmentPortal() {
  function submitEnrollmentForm(formData) {
    axios
      .post('https://smacv.onrender.com/api/assessment/submit', formData)
      .then((res) => alert(JSON.stringify(res, 0, 2)))
      .catch((err) => alert(JSON.stringify(err, 0, 2)));
  }

  const { register, handleSubmit } = useForm();

  const [strands, setStrands] = React.useState([]);

  const getStrands = (res) => setStrands(res);

  const [isFetchingData, setIsFetchingData] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    setIsFetchingData(true);
    axios
      .post('https://smacv.onrender.com/api/strand/search')
      .then((res) => {
        getStrands(res);
        setIsFetchingData(false);
        alert(JSON.stringify(res, 0, 2));
      })
      .catch((err) => {
        setIsFetchingData(false);
        setErrorMessage(err?.message);
        alert(JSON.stringify(err, 0, 2));
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
              ) : strands.length !== 0 ? (
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
                      <option value='1'>United States</option>
                      <option value='2'>Canada</option>
                      <option value='3'>France</option>
                      <option value='4'>Germany</option>
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
                      {...register('firstName', { required: true })}
                    />
                  </div>

                  <div className='mt-3'>
                    <div className='mb-2 block'>
                      <Label htmlFor='lastName' value='Student Last Name' />
                    </div>
                    <TextInput
                      type='text'
                      placeholder='Dela Cruz'
                      shadow={true}
                      {...register('lastName', { required: true })}
                    />
                  </div>

                  <div className='mt-3'>
                    <div className='mb-2 block'>
                      <Label htmlFor='middleName' value='Student Middle Name' />
                    </div>
                    <TextInput
                      type='text'
                      placeholder='Miguel '
                      shadow={true}
                      {...register('middleName', { required: true })}
                    />
                  </div>

                  <div className='mt-3'>
                    <div className='mb-2 block'>
                      <Label htmlFor='guardianName' value='Guardian Name' />
                    </div>
                    <TextInput
                      type='text'
                      placeholder='Juan'
                      shadow={true}
                      {...register('guardianName', { required: true })}
                    />
                  </div>

                  <div className='mt-3'>
                    <div className='mb-2 block'>
                      <Label
                        htmlFor='guardianContact'
                        value='Guardian Contact No.'
                      />
                    </div>
                    <TextInput
                      placeholder='Dela Cruz'
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
                      {...register('guardianRelationship', { required: true })}
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
          </div>
        </section>
      </main>
    </Layout>
  );
}
