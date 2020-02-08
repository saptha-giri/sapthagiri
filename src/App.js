import React from 'react';
// import logo from './logo.svg';
import MenuBar from './component/menu-bar/menuBar.js';
import Home from './component/home/home';
import About from './component/about/about';
import Services from './component/services/services';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

import './App.css';

const App=()=> {  

  return (
    <div className="App">
      <MenuBar/>
      <Home id="home"/>
      <About id="about"/>
      <Services id="services"/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;