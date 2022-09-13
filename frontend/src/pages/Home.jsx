import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';

function Home() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Intro />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
