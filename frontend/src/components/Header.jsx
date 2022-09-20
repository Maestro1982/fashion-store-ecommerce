import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faHeart,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    toast.success('You have successfully logged out!');
    navigate('/login');
  };

  return (
    <div className='h-container'>
      <div className='h-row'>
        <div className='h-col'>
          <div className='h-logo'>
            <Link to='/' className='logo'>
              Fashion Store
            </Link>
          </div>
          <div className='h-menu'>
            <ul className='menu-item'>
              <li>
                <Link to='/' className='menu-link'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/shop' className='menu-link'>
                  Shop
                </Link>
              </li>
              <li>
                <Link to='/blog' className='menu-link'>
                  Blog
                </Link>
              </li>
              {userInfo && (
                <li>
                  <Link to='/account' className='menu-link'>
                    Account
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='h-col'>
          <div className='h-secondMenu'>
            <ul className='second-menuItem'>
              {userInfo ? (
                <>
                  <li>
                    <span className='second-menuLink'>
                      <div className='menu-div'>
                        <FontAwesomeIcon icon={faRightToBracket} />
                      </div>
                      <span onClick={logoutHandler}>Logout</span>
                    </span>
                  </li>
                  <li>
                    <Link to='/wish' className='second-menuLink'>
                      <div className='menu-div'>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className='menu-badge'>0</span>
                      </div>
                      <span>Wish</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/shopping-cart' className='second-menuLink'>
                      <div className='menu-div'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className='menu-badge'>0</span>
                      </div>
                      <span>Cart</span>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to='/login' className='second-menuLink'>
                    <div className='menu-div'>
                      <FontAwesomeIcon icon={faRightToBracket} />
                    </div>
                    <span>Login</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
