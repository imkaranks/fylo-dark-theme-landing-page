import React from 'react';
import fyloLogo from '../assets/images/logo.svg';
import iconEmail from '../assets/images/icon-email.svg';
import iconLocation from '../assets/images/icon-location.svg';
import iconPhone from '../assets/images/icon-phone.svg';
import Link from './Link';

function Footer() {
  return (
    <footer className='bg-primary-700 py-16'>
      <div className="w-11/12 max-w-7xl mx-auto flex flex-wrap gap-8">
        <a href="#" className='basis-full' title='Go to the Homepage'>
          <img
            src={fyloLogo}
            alt="Fylo logo"
            role='image'
            className='max-w-[7rem] lg:max-w-[9rem]'
          />
        </a>

        <section className='basis-full flex-shrink lg:flex-1 grid gap-6'>
          <div className="flex gap-6 items-start">
            <h2 className='sr-only'>Location</h2>
            <img
              src={iconLocation}
              alt=''
              role='image'
              className='object-contain'
            />
            <p className='max-w-[54ch]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua
            </p>
          </div>
        </section>

        <section className='basis-full flex-shrink lg:flex-1'>
          <div className="grid gap-6 lg:justify-center">
            <h2 className='sr-only'>Contact Us</h2>

            <div className="flex gap-6">
              <h3 className="sr-only">Phone Number</h3>
              <img
                src={iconPhone}
                alt=''
                role='image'
              />
              <p>+1-543-123-4567</p>
            </div>

            <div className="flex gap-6">
              <h3 className="sr-only">Email Address</h3>
              <img
                src={iconEmail}
                alt=''
                role='image'
              />
              <p>example@fylo.com</p>
            </div>
          </div>
        </section>

        <section className="basis-full flex-shrink lg:flex-1">
          <ul className="columns-2 text-base space-y-6">
            <li>
              <Link
                text='About Us'
              />
            </li>
            <li>
              <Link
                text='Jobs'
              />
            </li>
            <li>
              <Link
                text='Press'
              />
            </li>
            <li>
              <Link
                text='Blog'
              />
            </li>
            <li>
              <Link
                text='Contact Us'
              />
            </li>
            <li>
              <Link
                text='Terms'
              />
            </li>
            <li>
              <Link
                text='Privacy'
              />
            </li>
          </ul>
        </section>

        <section className="basis-full flex-shrink lg:basis-auto">
          <ul className="flex gap-4 lg:justify-end">
            <li>
              <Link
                Icon={<i className="border border-inherit p-2 w-[36px] grid place-content-center aspect-square rounded-full fa-brands fa-facebook-f"></i>}
                addOns='text-lg hover:border-accent-cyan'
              />
            </li>
            <li>
              <Link
                Icon={<i className="border border-inherit p-2 w-[36px] grid place-content-center aspect-square rounded-full fa-brands fa-twitter"></i>}
                addOns='text-lg hover:border-accent-cyan'
              />
            </li>
            <li>
              <Link
                Icon={<i className="border border-inherit p-2 w-[36px] grid place-content-center aspect-square rounded-full fa-brands fa-instagram"></i>}
                addOns='text-lg hover:border-accent-cyan'
              />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;