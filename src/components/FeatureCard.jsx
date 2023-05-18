import React from 'react';
import { motion } from 'framer-motion';
import { card } from '../utils/motion'

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.article
      className='basis-96 flex flex-col gap-2'
      variants={card}
    >
      <img
        src={icon}
        alt={title}
        role='image'
        className='mx-auto max-h-16 mb-4'
      />
      <h3 className="text-xl text-white font-bold font-accent">{title}</h3>
      <p>{desc}</p>
    </motion.article>
  );
}

export default FeatureCard;