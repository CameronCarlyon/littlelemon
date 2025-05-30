import React from 'react';
import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import Menu from '../components/Menu.js';
import Promotion from '../components/Promotion'
import Footer from '../components/Footer.js';

function MainPage() {
  return (
    <div className="MainPage">
        <Header />
        <Hero />
        <div className='main-content'>
            <h3>ORDER FOR DELIVERY!</h3>
            <Menu/>
        </div>
        <Promotion />
        <Footer />
    </div>);
}

export default MainPage;