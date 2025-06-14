import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Headers from './components/Headers';
import Menus from './components/Menus';
import AboutMe from './components/AboutMe'; 
import ReachMe from './components/ReachMe';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <Router>
      <ToastContainer />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f4f8fb' }}>
        <Headers />
        <div style={{ flex: 1, display: 'flex', position: 'relative', overflow: 'hidden' }}>
          {/* Main Content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px 0', minHeight: 0 }} onClick={handleMenuClose}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/reach-me" element={<ReachMe />} />
              </Routes>
            </div>
          </div>
          {/* Sidebar/Menu - right side */}
          <div className={`right-sidebar${menuOpen ? ' open' : ''}`} onClick={e => e.stopPropagation()}>
            <Menus />
          </div>
          {/* Floating Menu Button */}
          <button className="menu-fab" onClick={handleMenuToggle} aria-label="Open menu">
            <span className="menu-fab-icon">☰</span>
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;