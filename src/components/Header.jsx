import React from 'react';
import fyloLogo from '../assets/images/logo.svg';
import Link from './Link';

function Header() {
  return (
    <header className='bg-primary-500 py-6 font-accent sticky top-0 z-40'>
      <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between">
        <a href="#primary-navigation" className="sr-only">skip to navigation</a>
        <a href="#main-content" className="sr-only">skip to main content</a>

        <img 
          src={fyloLogo}
          alt="Fylo logo" 
          role='image'
          className='max-w-[7rem] lg:max-w-[9rem]'
        />

        <nav id="primary-navigation">
          <ul className="list-none flex gap-4 md:gap-8 lg:gap-16 items-center">
            <li>
              <Link 
                path='#features'
                text='Features'
                addOns='hover:underline'
              />
            </li>
            <li>
              <Link 
                path='#collaborate'
                text='Team'
                addOns='hover:underline'
              />
            </li>
            <li>
              <Link 
                path='#sign-in'
                text='Sign in'
                addOns='hover:underline'
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;