import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GrandPrix from './components/GrandPrix';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <GrandPrix />
        <Events />
        <Gallery />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;