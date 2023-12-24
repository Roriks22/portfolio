import React from 'react';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Apropos from './pages/Apropos/index';
import Competences from './pages/Competences/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';
import Footer from './components/Footer/index';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Apropos />
      <Competences />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;