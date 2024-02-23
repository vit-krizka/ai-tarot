import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Divination from './components/DivinationsType/Divination/Divination';
import Divinations from './components/Divinations/Divinations';
import Cards from './components/Cards/Cards';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

import DivinationAnswer from './components/DivinationsType/DivinationAnswer/DivinationAnswer';
import FutureDivination from './components/DivinationsType/FutureDivination/FutureDivination';
import FutureDivinationAnswer from './components/DivinationsType/FutureDivinationAnswer/FutureDivinationAnswer';

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

          {/* Divination Types */}
          <Route path="/divination/answer" element={<DivinationAnswer />} />
          <Route path="/future-divination" element={<FutureDivination />} />
          <Route path="/future-divination/answer" element={<FutureDivinationAnswer />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
