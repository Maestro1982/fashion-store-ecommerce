import React from 'react';
import WishListItem from './filterPartials/WishListItem';

const WishList = () => {
  return (
    <div className='w-container'>
      <div className='w-row'>
        <h2 className='w-title'>Wish List</h2>
      </div>
      <div className='w-row'>
        <div className='w-groups'>
          <WishListItem />
          <WishListItem />
          <WishListItem />
          <WishListItem />
        </div>
      </div>
    </div>
  );
};

export default WishList;
