import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='si-container'>
      <div className='si-row'>
        <div className='si-formGroups'>
          <form>
            <h2 className='si-title'>Login</h2>
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

            <div className='si-formBtn'>
              <button className='si-loginBtn'>Login</button>
            </div>
            <div className='si-formRegister'>
              <Link to='/register'>Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
