import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const messages = useSelector((state) => state.messages);
  const profil = useSelector((state) => state.profil);

  const darkMode = useSelector((state) => state.settings.darkMode);

  return (
    <div style={{ padding: '20px' }}>
      <h1>NeoCare Medical Hub</h1>
      <h2>Welcome, {profil.name}</h2>
      
      
      <div style={{ 
        background: darkMode ? '#333' : '#eee', 
        color: darkMode ? 'white' : 'black',
        padding: '15px', 
        borderRadius: '8px', 
        maxWidth: '300px',
        border: 'none' 
      }}>
        <h3>Session Stats</h3>
        <p>Total messages in history: <strong>{messages.length}</strong></p>
      </div>

      <br />
      <Link to="/chat">
        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Open ARIA Chat
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;