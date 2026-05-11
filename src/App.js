import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import './App.css'; 

function App() {
  const darkMode = useSelector((state) => state.settings.darkMode);

  return (
    
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Dashboard</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/settings">Settings</Link>
        </nav>

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