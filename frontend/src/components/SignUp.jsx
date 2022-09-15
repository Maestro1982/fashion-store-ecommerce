import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='si-container'>
      <div className='si-row'>
        <div className='si-formGroups'>
          <form>
            <h2 className='si-title'>Register</h2>
            <div className='si-formGroup'>
              <label htmlFor='username' className='si-label'>
                Username
              </label>
              <input type='text' id='username' className='si-input' />
            </div>
            <div className='si-formGroup'>
              <label htmlFor='email' className='si-label'>
                Email
              </label>
              <input type='email' id='email' className='si-input' />
            </div>
            <div className='si-formGroup'>
              <label htmlFor='password' className='si-label'>
                Password
              </label>
              <input type='password' id='password' className='si-input' />
            </div>
            <div className='si-formGroup'>
              <label htmlFor='c_password' className='si-label'>
                Confirm Password
              </label>
              <input type='password' id='c_password' className='si-input' />
            </div>
            <div className='si-formBtn'>
              <button className='si-loginBtn'>Register</button>
            </div>
            <div className='si-formRegister'>
              <Link to='/login'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
