import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeBlogItem from './HomeBlogItem';

const HomeBlog = () => {
  return (
    <div id='blog' className='hb-container'>
      <div className='hb-row'>
        <div className='hb-col'>
          <div className='hb-blogDiv'>
            <div className='hb-blogs'>
              <HomeBlogItem />
              <HomeBlogItem />
              <HomeBlogItem />
              <HomeBlogItem />
            </div>
          </div>
        </div>
        <div className='hb-col'>
          <Link to='/blog' className='hb-more'>
            View More <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
