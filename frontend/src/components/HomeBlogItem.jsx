import React from 'react';
import { Link } from 'react-router-dom';

const HomeBlogItem = () => {
  return (
    <div className='hb-blog'>
      <Link to='/blog'>
        <h3 className='hb-blogTitle'>Title One</h3>
        <p className='hb-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          consequuntur ab fugit quos distinctio ea quia iusto deserunt aperiam
          illo dolore cupiditate expedita eveniet, facilis culpa optio cum
          maxime deleniti! Sit inventore quia saepe est rem placeat voluptas
          quasi.
        </p>
        <div className='hb-blogFooter'>
          <span>Admin</span>
          <span>14.09.2022</span>
        </div>
      </Link>
    </div>
  );
};

export default HomeBlogItem;
