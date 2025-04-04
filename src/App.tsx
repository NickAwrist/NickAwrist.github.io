import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ExperiencePage from './pages/ExperiencePage';
import ResumePage from './pages/ResumePage';

// ScrollToTop component to scroll back to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App: React.FC = () => {

  const [accentColor] = useState<string>(getRandomColor());

  function getRandomColor() {
    const letters: string = '6789ABCDEF';
    let color: string = '#';
    for(let i=0; i<6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
  }, [accentColor]);

  return (

    <Router>
      <div className="App">
        <Header accentColor={accentColor} />
        <ScrollToTop />
        <AppContent />
        <Footer />
      </div>
    </Router>

  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition 
        key={location.key}
        timeout={300} 
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
