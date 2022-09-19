import React from 'react';

const ProductDetails = () => {
  return (
    <div className='pd-container'>
      <div className='pd-row'>
        <div className='pd-col'>a</div>
        <div className='pd-col'>
          <div className='pd-groups'>
            <div className='pd-group'>
              <h3 className='pd-title'>Product One</h3>
            </div>
            <div className='pd-group'>
              <span className='pd-category'>Women</span>
              <span className='pd-subcategory'>Dresses</span>
            </div>
            <div className='pd-group'>
              <p className='pd-desc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                nobis voluptatem dolores quos. Natus optio, consequuntur
                necessitatibus magni nihil eius expedita, officia ea ullam
                voluptatibus voluptate eum excepturi consequatur repellat.
                Molestiae iusto reiciendis voluptatem explicabo qui! Ex quis
                fugit hic perferendis, aliquam deleniti sint eveniet facilis at,
                dolores fuga blanditiis soluta harum autem ratione modi, ad
                totam impedit rerum amet!
              </p>
            </div>
            <div className='pd-group'>
              <div className='pd-otherAction'>
                <div className='pd-size'>
                  <h4 className='pd-sizeTitle'>Size:</h4>
                  <div className='pd-sizeDiv'>
                    <input type='radio' id='xs' name='size' value='xs' />
                    <label htmlFor='xs'>XS</label>

                    <input type='radio' id='s' name='size' value='s' />
                    <label htmlFor='s'>S</label>

                    <input type='radio' id='m' name='size' value='m' />
                    <label htmlFor='m'>M</label>

                    <input type='radio' id='l' name='size' value='l' />
                    <label htmlFor='l'>L</label>
                  </div>
                </div>
                <div className='pd-color'>
                  <h4 className='pd-colorTitle'>Colors:</h4>
                  <div className='pd-colorDiv'>
                    <input
                      type='radio'
                      id='light-rose'
                      name='color'
                      value='Light-Rose'
                    />
                    <label htmlFor='light-rose'>Light-Rose</label>

                    <input type='radio' id='white' name='color' value='White' />
                    <label htmlFor='white'>White</label>

                    <input type='radio' id='black' name='color' value='Black' />
                    <label htmlFor='black'>Black</label>

                    <input type='radio' id='blue' name='color' value='Blue' />
                    <label htmlFor='blue'>Blue</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
