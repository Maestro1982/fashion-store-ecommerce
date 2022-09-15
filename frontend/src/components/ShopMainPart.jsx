import React from 'react';
import ShopFilter from './ShopFilter';

const ShopMainPart = () => {
  return (
    <div className='smp-container'>
      <div className='smp-row'>
        <h2 className='smp-title'>Shop</h2>
      </div>
      <div className='smp-row'>
        <div className='smp-col'>
          <h4 className='smp-filters'>Filters</h4>
          <div className='smp-filterGroups'>
            <ShopFilter />
          </div>
        </div>
        <div className='smp-col'>B</div>
      </div>
    </div>
  );
};

export default ShopMainPart;
