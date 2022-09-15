import React from 'react';
import ShopProduct from './ShopProduct';

const ShopProducts = () => {
  return (
    <div className='sps-container'>
      <div className='sps-row'>
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
      </div>
    </div>
  );
};

export default ShopProducts;
