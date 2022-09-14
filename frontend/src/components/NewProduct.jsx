import React from 'react';
import { Link } from 'react-router-dom';

const NewProduct = () => {
  return (
    <div className='np-group'>
      <Link to='/product'>
        <div className='np-body'>
          <img
            src='./assets/products/product1.jpg'
            className='product-img'
            alt=''
          />
        </div>
        <div className='np-footer'></div>
      </Link>
    </div>
  );
};

export default NewProduct;
