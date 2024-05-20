import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reports.scss';

function Reports() {
  return (
    <div className="container vh-100 bg-light">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Reports</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faChartLine} /> Reports Overview
              </h5>
              <p className="card-text">
                This is where you can see a summary of your reports.
              </p>
              <a href="#" className="btn btn-primary">View detailed report</a>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary" onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default Reports;
