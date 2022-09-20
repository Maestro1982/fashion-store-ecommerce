import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (e) => {
    // Prevents page to refresh
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('You are successfully logged in!');
      navigate('/');
    } catch (error) {
      toast.error('Invalid email or password!');
    }
  };

  /* Check if user exists, re-direct from login to home page */
  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      localStorage.getItem('userInfo');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className='si-container'>
      <div className='si-row'>
        <div className='si-formGroups'>
          <form onSubmit={loginHandler}>
            <h2 className='si-title'>Login</h2>
            <div className='si-formGroup'>
              <label htmlFor='email' className='si-label'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='si-input'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='si-formGroup'>
              <label htmlFor='password' className='si-label'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='si-input'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
