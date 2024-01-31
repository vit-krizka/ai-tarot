import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Divination from './components/Divination/Divination';
import Login from './components/Login/Login';

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

export default App
