import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Divination from './components/Divination/Divination';
import Divinations from './components/Divinations/Divinations';
import Cards from './components/Cards/Cards';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

import DivinationAnswer from './components/DivinationAnswer/DivinationAnswer';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Divination />} />
          <Route path="/login" element={<Login />} />
          <Route path="/divinations" element={<Divinations />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/divination/answer" element={<DivinationAnswer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
