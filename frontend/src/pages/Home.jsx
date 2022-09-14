import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import HomeBlog from '../components/HomeBlog';
import NewProducts from '../components/NewProducts';

const Home = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Intro />
        <HomeBlog />
        <NewProducts />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
