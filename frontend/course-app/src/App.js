import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Headers from './components/Headers';
import AboutMe from './components/AboutMe'; 
import ReachMe from './components/ReachMe';

function App() {

  return (
    <Router>
      <ToastContainer />
      <div style={{ background: '#f4f8fb' }}>
        <Headers />
        {/* Main Content */}
        <div style={{ padding: '32px 0', maxWidth: 900, margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/view-courses" element={<AllCourses />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/reach-me" element={<ReachMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;