import React from 'react';
import TestimonialCard from './TestimonialCard';
import data from '../data/data.json';
import { motion } from 'framer-motion';

function Testimonial() {
  return (
    <section className='py-16 scroll-mt-20 isolate'>
      <motion.div
        className="w-11/12 max-w-7xl mx-auto flex flex-wrap justify-center gap-8"
        initial="offscreen"
        whileInView="onscreen"
        transition={{staggerChildren: 0.2}}
      >
        <h2 className='sr-only'>Testimonials</h2>
        {
          data.testimonials.map((testimonial, id) => (
            <TestimonialCard
              key={id}
              {...testimonial}
            />
          ))
        }
      </motion.div>
    </section>
  );
}

export default Testimonial;