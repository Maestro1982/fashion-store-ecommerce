import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bcrypt from 'bcryptjs';

const ChangePassword = () => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;
  console.log(userInfo);

  const userOldPass = userInfo.password;
  console.log(userOldPass);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const updateHandler = async (e) => {
    // Prevents page to refresh
    e.preventDefault();

    async function compareIt(oldPassword) {
      const validPassword = await bcrypt.compare(oldPassword, userOldPass);

      // Check if old password is correct
      if (validPassword !== true) {
        toast.error('The old password is not correct!');
        return;
      }

      // If new password === confirm new password
      if (newPassword === confirmNewPassword) {
        try {
          const { data } = await axios.put('/api/users/update', {
            _id: userInfo._id,
            newPassword,
          });

          localStorage.removeItem('userInfo', JSON.stringify(data));
          toast.success('Password updated successfully!');
          navigate('/login');
        } catch (error) {
          toast.error('Password not updated!');
        }
      } else {
        toast.error(
          'New password and confirmed new password are not the same!'
        );
      }
    }
    compareIt(oldPassword);
  };

  return (
    <div className='si-container'>
      <div className='cp-row'>
        <div className='cp-formGroups'>
          <form onSubmit={updateHandler}>
            <h2 className='cp-title'>Change Password</h2>
            <div className='cp-formGroup'>
              <label htmlFor='o_password' className='cp-label'>
                Old Password
              </label>
              <input
                type='password'
                id='o_password'
                className='cp-input'
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className='cp-formGroup'>
              <label htmlFor='password' className='cp-label'>
                New Password
              </label>
              <input
                type='password'
                id='password'
                className='cp-input'
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className='cp-formGroup'>
              <label htmlFor='c_password' className='cp-label'>
                Confirm New Password
              </label>
              <input
                type='password'
                id='c_password'
                className='cp-input'
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>

            <div className='cp-formBtn'>
              <button className='cp-changePasswordBtn'>Update Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
