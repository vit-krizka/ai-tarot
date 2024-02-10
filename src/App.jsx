import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Divination from './components/Divination/Divination';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Divination />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
