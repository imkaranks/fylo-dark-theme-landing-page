import React from 'react';

function FeatureCard({ icon, title, desc }) {
  return (
    <article className='basis-96 flex flex-col gap-2'>
      <img
        src={icon}
        alt={title}
        role='image'
        className='mx-auto max-h-16 mb-4'
      />
      <h3 className="text-xl text-white font-bold font-accent">{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

export default FeatureCard;