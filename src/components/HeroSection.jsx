import React from 'react';
import introIllustration from '../assets/images/illustration-intro.png';

function HeroSection() {
  return (
    <section className='bg-curve | pt-16 pb-36'>
      <div className="w-11/12 max-w-5xl mx-auto text-center flex flex-col gap-6">
        <img
          src={introIllustration}
          alt="all your files in one secure location"
          className='w-full max-w-[720px] mx-auto object-contain'
        />

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-accent font-bold max-w-[34ch]">All your files in one secure location, accessible anywhere.</h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl max-w-[54ch]'>
            Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <button className='font-accent font-bold text-white bg-gradient-to-r from-accent-cyan to-accent-blue py-4 px-24 rounded-full hover:bg-gradient-to-b hover:from-accent-blue hover:to-accent-cyan hover:transition-all ease-in-out'>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;