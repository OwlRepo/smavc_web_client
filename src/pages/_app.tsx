import { Navbar } from 'flowbite-react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Enrollment Portal',
      href: '/enrollment_portal',
    },
    // {
    //   label: 'Contact',
    //   href: '/contact',
    // },
  ];

  return (
    <div className='flex min-h-screen flex-col py-5  px-5 text-black md:px-20 md:py-10'>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href='/'>
          <img
            src='https://scontent.fmnl17-5.fna.fbcdn.net/v/t31.18172-8/461928_214920305302153_97603065_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHm9tBSK028xufkKYNMzu0feJj6iY8ufBl4mPqJjy58GQtNDf5zU8E477QjoE3mmxb8OYnk-s-Aoi7NXjmxyp-x&_nc_ohc=n-g0mT6M-gsAX8A-ID1&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfBjfZtilfa0ephjf7OsC9Cd66_hvk2pb87RtvTiaFWWyQ&oe=63ED6776'
            className='mr-3 h-6 sm:h-9'
            alt="Saint Mary's Angels College of Valenzuela"
          />
          <span className='hidden self-center whitespace-nowrap text-center text-xl font-semibold dark:text-white lg:flex'>
            Saint Mary's Angels College of Valenzuela
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navLinks.map((navLink) => (
            <Navbar.Link
              key={navLink.href}
              className='cursor-pointer'
              onClick={() => router.push(navLink.href)}
              active={router.asPath === navLink.href}
            >
              {navLink.label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <div className='layout'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
