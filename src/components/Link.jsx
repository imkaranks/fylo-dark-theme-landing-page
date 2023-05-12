import React from 'react';

function Link({ path, text, Icon, addOns }) {
  return (
    <a
      href={`${path || '#'}`}
      className={`${!Icon ? 'hover:text-white' : 'hover:text-accent-cyan'} hover:transition-colors hover:ease-in-out ${addOns || ''}`}
    >
      {text || Icon}
    </a>
  );
}

export default Link;