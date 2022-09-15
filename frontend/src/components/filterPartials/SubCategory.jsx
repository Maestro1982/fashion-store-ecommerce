import React from 'react';

const SubCategory = () => {
  return (
    <div className='sc-filterDiv'>
      <div className='sc-checkboxes'>
        <div className='sc-checkbox'>
          <label htmlFor='dresses' className='sc-filterLabel'>
            Dresses
          </label>
          <input type='checkbox' className='sc-check' name='' id='dresses' />
        </div>
        <div className='sc-checkbox'>
          <label htmlFor='jeans' className='sc-filterLabel'>
            Jeans
          </label>
          <input type='checkbox' className='sc-check' name='' id='jeans' />
        </div>
        <div className='sc-checkbox'>
          <label htmlFor='t-shirt' className='sc-filterLabel'>
            T-Shirts
          </label>
          <input type='checkbox' className='sc-check' name='' id='t-shirt' />
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
