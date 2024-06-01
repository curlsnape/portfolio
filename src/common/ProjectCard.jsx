import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover w-[100%]  h-60 object-contain" src={src} alt={`${h3} logo`} />
      <h3 className='text-xl mt-5 mb-1 font-medium'>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
