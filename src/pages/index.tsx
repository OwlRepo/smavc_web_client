import { Card, Carousel } from 'flowbite-react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col'>
            <div className='mt-16 rounded'>
              <h1 className='text-md self-center text-center md:text-5xl'>
                Quality education made
                <span className='bg-gradient-to-r from-primary-500 to-yellow-500 bg-clip-text text-transparent '>
                  {' '}
                  more accessible
                </span>
              </h1>
              <p className='text-grey self-center px-8 pt-5 text-center text-justify text-xs md:text-center md:text-xl'>
                Providing a strategic, relevant and flexible educational program
                that pursue excellence, uphold values and responds positively to
                the needs of society in times of global crisis.
              </p>
            </div>
            <div className='my-16 h-56 rounded sm:h-64 xl:h-80 2xl:h-96'>
              <Carousel className='rounded shadow-lg'>
                <img
                  src='https://saintmarysangels.edu.ph/storage/smac-files/jIdPDnijIWCvErfuTrCzdZjpHNT5TRhgO1v36A9H.gif'
                  alt="Saint Mary's Angels College of Valenzuela"
                  height='100%'
                />
                <img
                  src='https://saintmarysangels.edu.ph/storage/smac-files/j1y8Cs1jJNrqfWss7F11XXUeZ4QG9cMAIS8YdHDj.png'
                  alt="Saint Mary's Angels College of Valenzuela"
                  height='100%'
                />
                <img
                  alt="Saint Mary's Angels College of Valenzuela"
                  height='100%'
                  src='https://saintmarysangels.edu.ph/storage/smac-files/rkvIh9I2C6JIAulJQ9VQHf6DR21DNaaQXlEvtI5x.jpeg'
                />
                <img
                  alt="Saint Mary's Angels College of Valenzuela"
                  height='100%'
                  src='https://saintmarysangels.edu.ph/storage/smac-files/ZYAmYodZcipoTeRXVxaYxYaQ1r2HdB5n6BfsN40W.jpeg'
                />
                <img
                  alt="Saint Mary's Angels College of Valenzuela"
                  height='100%'
                  src='https://saintmarysangels.edu.ph/storage/smac-files/HRbtkNwEGMWRlhIBJA3bx6APh3YLcenGbGwhxlKQ.jpeg'
                />
              </Carousel>
            </div>
          </div>
        </section>

        <section className='bg-white'>
          <div className='layout flex flex-col'>
            <h3>Recent Events</h3>
            <div className='mt-5 grid max-w-full grid-cols-1 gap-5 lg:grid-cols-3'>
              {[1, 2, 3, 4, 5].map((i) => (
                <Card
                  key={i}
                  imgAlt='Meaningful alt text for an image that is not purely decorative'
                  imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'
                >
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
