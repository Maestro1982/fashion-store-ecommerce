import React from 'react';
import { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ProductDetails = () => {
  const [selectedImg, setSelectedImg] = useState('');
  return (
    <div className='pd-container'>
      <div className='pd-row'>
        <div className='pd-col'>
          <div className='pd-imageDiv'>
            <div className='pd-top'>
              <TransformWrapper>
                <TransformComponent>
                  <img
                    src={selectedImg || './assets/products/product1.jpg'}
                    alt=''
                    className='pd-img'
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
            <div className='pd-bottom'>
              <img
                src='./assets/products/product1.jpg'
                alt=''
                className='pd-smallImg'
                onClick={() => setSelectedImg('./assets/products/product1.jpg')}
              />
              <img
                src='./assets/products/product1-2.jpg'
                alt=''
                className='pd-smallImg'
                onClick={() =>
                  setSelectedImg('./assets/products/product1-2.jpg')
                }
              />
              <img
                src='./assets/products/product1-3.jpg'
                alt=''
                className='pd-smallImg'
                onClick={() =>
                  setSelectedImg('./assets/products/product1-3.jpg')
                }
              />
              <img
                src='./assets/products/product1-4.jpg'
                alt=''
                className='pd-smallImg'
                onClick={() =>
                  setSelectedImg('./assets/products/product1-4.jpg')
                }
              />
            </div>
          </div>
        </div>
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
              <p className='pd-quantity'>
                Quantity: <span className='pd-quantityNumber'>1</span>
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
            <div className='pd-group'>
              <div className='pd-btnsGroup'>
                <button className='pd-wishBtn'>Add to Wish</button>
                <button className='pd-cartBtn'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
