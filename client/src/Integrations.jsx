import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Integrations.scss';

function Integrations() {
  return (
    <div className="container vh-100 bg-light">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Integrations</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faPuzzlePiece} /> Integrations Overview
              </h5>
              <p className="card-text">
                This is where you can see a summary of your integrations.
              </p>
              <a href="#" className="btn btn-primary">View detailed integration</a>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary" onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default Integrations;
