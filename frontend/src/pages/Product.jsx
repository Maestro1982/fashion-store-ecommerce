import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Product = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>Product</main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};

export default Product;
