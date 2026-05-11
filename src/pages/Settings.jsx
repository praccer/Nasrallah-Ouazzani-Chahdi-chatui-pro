import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/settingsSlice';
import { updateProfil } from '../store/slices/profilSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const profil = useSelector((state) => state.profil);
  const [newName, setNewName] = useState(profil.name);

  const handleSaveName = () => {
    dispatch(updateProfil({ name: newName }));
    alert('Name updated successfully!');
  };

  return (
    <div className="settings-container">
      <h2>NeoCare Settings</h2>
      <div className="settings-card">
        <h3>Appearance</h3>
        <p>Current Mode: <strong>{settings.darkMode ? 'Dark' : 'Light'}</strong></p>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Dark Mode</button>
      </div>
      <div className="settings-card">
        <h3>Agent Profile</h3>
        <p>Change your display name:</p>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button onClick={handleSaveName}>Save Name</button>
      </div>
    </div>
  );
}; 

export default Settings; 