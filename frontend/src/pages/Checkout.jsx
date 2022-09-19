import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Checkout = ({ setIsOpen }) => {
  return (
    <div className='co-container'>
      <form>
        <h5 className='co-title'>You will pay after delivery!</h5>
        <div className='close-form' onClick={() => setIsOpen(false)}>
          X
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' required />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input type='text' id='phone' required />
        </div>
        <div className='co-btn'>
          <button type='submit'>
            Order <FontAwesomeIcon icon={faTruck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
