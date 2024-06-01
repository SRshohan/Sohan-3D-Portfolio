import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import githubIcon from '../assets/icons/github.svg'; // Adjust the path as needed

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <div className='cta-buttons'>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className='github-link'>
          <ReactSVG src={githubIcon} className="github-icon" />
        </a>
      </div>
    </section>
  );
};

export default CTA;


