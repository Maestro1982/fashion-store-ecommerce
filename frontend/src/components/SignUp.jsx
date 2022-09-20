import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerHandler = async (e) => {
    // Prevents page to refresh
    e.preventDefault();

    // Check password === confirm password
    if (password !== confirmPassword) {
      toast.error('Passwords are not the same!');
      return;
    }

    try {
      const { data } = await axios.post('/api/users/register', {
        username,
        email,
        password,
      });
      toast.success('You have successfully registered!');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed! Try again!');
    }
  };

  /* Check if user exists, re-direct from register to home page */
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
          <form onSubmit={registerHandler}>
            <h2 className='si-title'>Register</h2>
            <div className='si-formGroup'>
              <label htmlFor='username' className='si-label'>
                Username
              </label>
              <input
                type='text'
                id='username'
                className='si-input'
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
            <div className='si-formGroup'>
              <label htmlFor='c_password' className='si-label'>
                Confirm Password
              </label>
              <input
                type='password'
                id='c_password'
                className='si-input'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
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
