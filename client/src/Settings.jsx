import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Settings.scss';

function Settings() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <img src="/path/to/your/image.jpg" alt="Settings" className="img-fluid mb-4" />
              <h2 className="mb-4">Settings</h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam scelerisque diam sit amet fermentum. 
                Aliquam vel lectus quis enim vestibulum iaculis. 
                Phasellus rutrum posuere erat.
              </p>
              <p className="text-muted">
                Duis tincidunt arcu nec feugiat volutpat. 
                Phasellus at dui at velit lacinia pharetra. 
                Donec non velit vehicula, mattis quam eget, accumsan sapien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
