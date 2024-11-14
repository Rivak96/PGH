import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Booking />
        <Reviews />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;