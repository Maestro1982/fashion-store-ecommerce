import React from 'react';

const ChangePassword = () => {
  return (
    <div className='si-container'>
      <div className='cp-row'>
        <div className='cp-formGroups'>
          <form>
            <h2 className='cp-title'>Change Password</h2>
            <div className='cp-formGroup'>
              <label htmlFor='o_password' className='cp-label'>
                Old Password
              </label>
              <input type='o_password' id='o_password' className='cp-input' />
            </div>
            <div className='cp-formGroup'>
              <label htmlFor='password' className='cp-label'>
                New Password
              </label>
              <input type='password' id='password' className='cp-input' />
            </div>
            <div className='cp-formGroup'>
              <label htmlFor='c_password' className='cp-label'>
                Confirm New Password
              </label>
              <input type='password' id='c_password' className='cp-input' />
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
