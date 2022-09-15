import React from 'react';
import Category from './filterPartials/Category';
import Search from './filterPartials/Search';
import SubCategory from './filterPartials/SubCategory';
import Price from './filterPartials/Price';
import StarRating from './filterPartials/StarRating';

const ShopFilter = () => {
  return (
    <>
      <div className='sf-group'>
        <span className='sf-groupTitle'>Search</span>
        <Search />
      </div>
      <div className='sf-group'>
        <span className='sf-groupTitle'>Category</span>
        <Category />
      </div>
      <div className='sf-group'>
        <span className='sf-groupTitle'>Sub Category</span>
        <SubCategory />
      </div>
      <div className='sf-group'>
        <span className='sf-groupTitle'>Price</span>
        <Price />
      </div>
      <div className='sf-group'>
        <span className='sf-groupTitle'>Star Rating</span>
        <StarRating />
      </div>
    </>
  );
};

export default ShopFilter;
