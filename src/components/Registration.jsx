import React from 'react';
import { motion } from 'framer-motion';

function Registration() {
  return (
    <section className='registration | bg-primary-600 py-16 scroll-mt-20 text-center' id='sign-in'>
      <motion.div
        className="w-11/12 max-w-4xl mx-auto bg-primary-500 p-6 sm:p-10 md:px-16 flex flex-col gap-8 rounded-md shadow-lg"
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-accent font-bold leading-none">Get early access today</h2>
        <p className='max-w-[80ch] mx-auto'>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
          questions, our support team would be happy to help you.
        </p>
        <form className='flex flex-col md:flex-row gap-6'>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input className='flex-1 text-black py-4 px-8 rounded-full focus:outline-1 focus:outline-offset-4 focus:outline-accent-blue' type="email" name="email" id="email" />
          <button type="submit" className='font-accent font-bold text-white bg-gradient-to-r from-accent-cyan to-accent-blue py-4 px-8 rounded-full hover:bg-gradient-to-b hover:from-accent-blue hover:to-accent-cyan hover:transition-all ease-in-out'>Get Started For Free</button>
        </form>
      </motion.div>
    </section>
  );
}

export default Registration;