import React from 'react';
import stayProductiveImg from '../assets/images/illustration-stay-productive.png';
import iconArrow from '../assets/images/icon-arrow.svg';
import { motion } from 'framer-motion';
import { textContent } from '../utils/motion';

function Collaborate() {
  return (
    <section className='py-16 scroll-mt-20' id='collaborate' aria-labelledby='collaborate-title'>
      <div className="w-11/12 max-w-7xl mx-auto grid gap-4 sm:gap-8 md:grid-cols-2 md:gap-12">
        <img
          src={stayProductiveImg}
          alt="stay productive"
        />
        <motion.div
          className='flex flex-col gap-4 justify-center items-start'
          variants={textContent}
          initial="offscreen"
          whileInView="onscreen"
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl text-white max-w-[15ch] font-bold font-accent' id='collaborate-title'>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
            storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email 
            attachments required.
          </p>
          <a href="#" className='flex gap-2 items-center text-accent-cyan border-b pb-2 border-b-accent-cyan hover:transition-colors hover:text-white hover:border-b-white'>
            <span>See how Fylo works</span>
            <img
              src={iconArrow}
              alt=""
              role='image'
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Collaborate;