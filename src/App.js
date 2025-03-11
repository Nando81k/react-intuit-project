import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CompanyBackground from './components/CompanyBackground';
import Footer from './components/Footer';
import KeyFindings from './components/KeyFindings';
import Analysis from './components/Analysis';
import Conclusion from './components/conclusion';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <CompanyBackground />
      <KeyFindings />
      <Analysis />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;
