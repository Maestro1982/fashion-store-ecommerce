import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = () => {
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
      <div className='ci-otherDiv'>
        <div className='ci-quantityDiv'>
          <button className='ci-minus'>-</button>
          <span className='ci-quantity'>1</span>
          <button className='ci-plus'>+</button>
        </div>
        <button className='w-trashBtn cart-trash'>
          <span className='w-trash'>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
