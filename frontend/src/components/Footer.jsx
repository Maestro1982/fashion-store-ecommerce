import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='f-container'>
      <div className='f-row'>
        <div className='f-col'>
          <Link to='/'>Instagram</Link>
        </div>
        <div className='f-col'>
          <Link to='/'>Facebook</Link>
        </div>
        <div className='f-col'>
          <Link to='/'>LinkedIn</Link>
        </div>
        <div className='f-col'>
          <Link to='/'>Youtube</Link>
        </div>
      </div>
      <div className='f-row'>
        <div className='f-copyright'>
          <span>&copy; 2022. All rights reserved. Powered by Kris Toté.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
