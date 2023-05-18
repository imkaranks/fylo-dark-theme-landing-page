import React from 'react';
import FeatureCard from './FeatureCard';
import data from '../data/data.json';
import { motion } from 'framer-motion';

function Features() {
  return (
    <section className='py-16 scroll-mt-20' id='features'>
      <motion.div
        className="w-11/12 max-w-4xl mx-auto text-center flex flex-wrap justify-center gap-16 lg:justify-between"
        initial="offscreen"
        whileInView="onscreen"
        transition={{staggerChildren: 0.2}}
      >
        <h2 className="sr-only">Features</h2>
        {
          data.features.map((feature, id) => (
            <FeatureCard
              key={id}
              {...feature}
            />
          ))
        }
      </motion.div>
    </section>
  );
}

export default Features;