import React from 'react';
import NewProduct from './NewProduct';

const NewProducts = () => {
  return (
    <div className='nps-container'>
      <div className='nps-row'>
        <h2 className='nps-title'>New Products</h2>
      </div>
      <div className='nps-row'>
        <div className='nps-groups'>
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
