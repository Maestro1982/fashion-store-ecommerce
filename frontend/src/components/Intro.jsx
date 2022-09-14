import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
  return (
    <div className='i-container'>
      <div className='i-row'>
        <div className='i-col'>
          <h2 className='i-title'>Dangerous fashion, Serious style</h2>
          <p className='i-subtitle'>Be your own label</p>
          <Link to='/shop' className='i-shopBtn'>
            Shop Now
          </Link>
        </div>
        <div className='i-colArrow'>
          <Link to='#blog'>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
