import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CompanyBackground from './components/CompanyBackground';
import Footer from './components/Footer';
import Analysis from './components/Analysis';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <CompanyBackground />
      <Analysis />
      <Footer />
    </div>
  );
}

export default App;
