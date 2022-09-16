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
        <div className='ci-col'>
          <div className='cart-bill'>
            <h2 className='bill-title'>My Bill</h2>
            <div className='bill-groups'>
              <div className='bill-group'>
                <span>Product 1</span>
                <span>€149.00</span>
              </div>
            </div>
            <div className='bill-total'>
              <div className='bill-group'>
                <span>Subtotal:</span>
                <span>€149.00</span>
              </div>
              <div className='bill-group'>
                <span>Tax 21%</span>
                <span>€31.29</span>
              </div>
              <div className='bill-group'>
                <h3>Total:</h3>
                <h3>€180.29</h3>
              </div>
            </div>
            <div className='bill-btn'>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
