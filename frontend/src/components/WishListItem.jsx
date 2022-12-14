import React from 'react';
import { Link } from 'react-router-dom';

const WishListItem = () => {
  return (
    <div className='np-group'>
      <Link to='/product:1597530'>
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
      <div className='ci-otherDiv'>
        <button className='w-trashBtn'>
          <span className='w-trash'>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
