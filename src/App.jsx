import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyAccount from './components/MyAccount/MyAccount';

import QuestionDivination from './components/DivinationsType/QuestionDivination/QuestionDivination';
import Divinations from './components/Divinations/Divinations';
import Cards from './components/Cards/Cards';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

import QuestionDivinationAnswer from './components/DivinationsType/QuestionDivinationAnswer/QuestionDivinationAnswer';
import FutureDivination from './components/DivinationsType/FutureDivination/FutureDivination';
import FutureDivinationAnswer from './components/DivinationsType/FutureDivinationAnswer/FutureDivinationAnswer';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<QuestionDivination />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-account" element={<MyAccount />} />

          <Route path="/divinations" element={<Divinations />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />

          {/* Divination Types */}
          <Route path="/question-divination" element={<QuestionDivination />} />
          <Route path="/question-divination/answer" element={<QuestionDivinationAnswer />} />
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
