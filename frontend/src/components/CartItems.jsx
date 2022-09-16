import React from 'react';
import CartItem from './CartItem';

const CartItems = () => {
  return (
    <div className='ci-container'>
      <div className='w-row'>
        <h2 className='ci-title'>Your Cart</h2>
      </div>
      <div className='ci-row'>
        <div className='ci-col'>
          <div className='w-groups'>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className='ci-col'>Right</div>
      </div>
    </div>
  );
};

export default CartItems;
