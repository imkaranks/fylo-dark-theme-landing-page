import React from 'react';
import fyloLogo from '../assets/images/logo.svg';
import Link from './Link';
import { motion } from 'framer-motion';

const headerItem = {
  hide: {
    opacity: 0,
    y: '-20vh'
  },
  show: {
    opacity: 1,
    y: 0
  }
}

function Header() {
  return (
    <header className='bg-primary-500 py-6 font-accent sticky top-0 z-40'>
      <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between">
        <a href="#primary-navigation" className="sr-only">skip to navigation</a>
        <a href="#main-content" className="sr-only">skip to main content</a>

        <motion.img 
          src={fyloLogo}
          alt="Fylo logo" 
          role='image'
          className='max-w-[7rem] lg:max-w-[9rem]'
          variants={headerItem}
          initial="hide"
          animate="show"
        />

        <nav id="primary-navigation">
          <motion.ul
            className="list-none flex gap-4 md:gap-8 lg:gap-16 items-center"
            initial="hide"
            animate="show"
            transition={{staggerChildren: 0.2}}
          >
            <motion.li variants={headerItem}>
              <Link 
                path='#features'
                text='Features'
                addOns='hover:underline'
              />
            </motion.li>
            <motion.li variants={headerItem}>
              <Link 
                path='#collaborate'
                text='Team'
                addOns='hover:underline'
              />
            </motion.li>
            <motion.li variants={headerItem}>
              <Link 
                path='#sign-in'
                text='Sign in'
                addOns='hover:underline'
              />
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;