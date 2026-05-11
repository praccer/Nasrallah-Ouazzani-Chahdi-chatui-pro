import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const messages = useSelector((state) => state.messages);
  const profil = useSelector((state) => state.profil);
  const darkMode = useSelector((state) => state.settings.darkMode);

  return (

    <div className={`container py-5 ${darkMode ? 'bg-dark text-light' : ''}`}>
      
      {/* HEADER SECTION */}
      <div className="row mb-5 text-center">
        <div className="col">
          <h1 className="display-4 fw-bold text-primary">NeoCare Medical Hub</h1>
          <p className="lead">Welcome back, <span className="fw-bold">{profil.name}</span></p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="row g-4 justify-content-center">
        
        {/* STATS CARD */}
        <div className="col-md-5 col-lg-4">
          <div className={`card h-100 shadow border-0 p-3 ${darkMode ? 'bg-secondary text-white' : 'bg-white'}`}>
            <div className="card-body">
              <h6 className="text-uppercase text-muted small mb-3">Health Activity</h6>
              <h3 className="card-title fw-bold">Session Stats</h3>
              <p className="card-text fs-5">
                Total messages: <span className="badge bg-primary rounded-pill">{messages.length}</span>
              </p>
            </div>
          </div>
        </div>

        {/* ACTION CARD */}
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 shadow border-0 p-3 bg-primary text-white">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold">Consult ARIA</h3>
                <p className="small opacity-75">Our AI assistant is ready to help with your medical queries.</p>
              </div>
              <Link to="/chat" className="btn btn-light btn-lg fw-bold text-primary w-100 mt-3">
                Open ARIA Chat
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;