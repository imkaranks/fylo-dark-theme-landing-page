import React from 'react';
import TestimonialCard from './TestimonialCard';
import data from '../data/data.json';

function Testimonial() {
  return (
    <section className='py-16 scroll-mt-20 isolate'>
      <div className="w-11/12 max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        <h2 className='sr-only'>Testimonials</h2>
        {
          data.testimonials.map((testimonial, id) => (
            <TestimonialCard
              key={id}
              {...testimonial}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Testimonial;