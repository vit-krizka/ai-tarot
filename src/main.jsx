import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import AuthProvider from './context/AuthProvider';
import SettingProvider from './context/SettingProvider';
import UserProvider from './context/UserProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <SettingProvider>
          <App />
        </SettingProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
)
