import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const Price = () => {
  const [price, setPrice] = useState([1, 1000]);
  return (
    <div className='p-btn'>
      <Slider
        range
        min={1}
        max={1000}
        defaultValue={[1, 1000]}
        marks={{ 1: `€1`, 1000: `€1000` }}
      />
    </div>
  );
};

export default Price;
