import React from 'react';
import { motion } from 'framer-motion';
import { card } from '../utils/motion'

function TestimonialCard({ authorName, authorImage, authorReview, authorPost }) {
  return (
    <motion.figure
      className='testimonial__card | relative bg-primary-400 p-6 basis-96 flex flex-col gap-6 rounded-md shadow-lg'
      variants={card}
    >
      <blockquote>{authorReview}</blockquote>
      <div className='flex gap-2'>
        <img
          src={authorImage}
          alt={authorName}
          className='avatar | w-8 h-8 rounded-full object-cover'
        />
        <figcaption className='flex flex-col'>
          <span className='text-xs text-white font-bold'>{authorName}</span>
          <span className='text-[7px] uppercase'> {authorPost}</span>
        </figcaption>
      </div>
    </motion.figure>
  )
}

export default TestimonialCard