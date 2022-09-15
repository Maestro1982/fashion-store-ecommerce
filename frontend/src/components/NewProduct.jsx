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
        <div className='np-footer'>
          <div className='np-footerDiv'>
            <span className='np-category'>Dresses</span>
            <h3 className='np-titleProduct'>Product 1</h3>
            <div className='np-footerSubDiv'>
              <span className='np-price'>€149.00</span>
              <span className='np-star'>4★</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewProduct;
