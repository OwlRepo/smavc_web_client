import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Contact() {
  return (
    <Layout>
      <Seo templateTitle='Contact' />
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'></div>
        </section>
      </main>
    </Layout>
  );
}
