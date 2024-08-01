// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import About from './pages/About';
import SingleBlog from './pages/SingleBlog';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </div>
    </Router>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
