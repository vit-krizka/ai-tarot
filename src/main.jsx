import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import AuthProvider from './context/AuthProvider';
import SettingProvider from './context/SettingProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SettingProvider>
        <App />
      </SettingProvider>
    </AuthProvider>
  </React.StrictMode>
)
