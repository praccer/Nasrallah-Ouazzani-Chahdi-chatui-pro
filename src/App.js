import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar'; 
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const darkMode = useSelector((state) => state.settings.darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        
        <Navbar /> 

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;