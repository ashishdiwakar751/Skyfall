import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Experience from './pages/Experience';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full bg-bg-primary text-text-primary overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </Router>
  );
};

export default App;


