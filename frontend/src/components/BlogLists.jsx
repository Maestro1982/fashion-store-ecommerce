import React from 'react';
import BlogListItem from './BlogListItem';

const BlogLists = () => {
  return (
    <div id='blog' className='hb-container'>
      <div className='hb-row'>
        <h2 className='bl-title'>Our Blogs</h2>
      </div>
      <div className='hb-row'>
        <div className='hb-col'>
          <div className='hb-blogDiv'>
            <div className='hb-blogs'>
              <BlogListItem />
              <BlogListItem />
              <BlogListItem />
              <BlogListItem />
              <BlogListItem />
              <BlogListItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLists;
