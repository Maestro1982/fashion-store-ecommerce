import React from 'react';

const AboutMe = () => {
  return (
    <div className='am-container'>
      <div className='am-row'>
        <h2 className='am-title'>About Me</h2>
      </div>
      <div className='am-row'>
        <div className='am-left'>
          <img
            src='./assets/customers/user.png'
            height={200}
            width={200}
            alt=''
          />
        </div>
        <div className='am-right'>
          <h3 className='am-fullName'>Kris Toté</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
