import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  const darkMode = useSelector((state) => state.settings.darkMode);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white shadow-sm'} mb-4`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
           NeoCare
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link px-3" to="/">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link px-3" to="/chat">Chat</Link></li>
            <li className="nav-item"><Link className="nav-link px-3" to="/settings">Settings</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;