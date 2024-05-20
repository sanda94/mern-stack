import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartBar, faUsers, faCoffee, faCog } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">
        <nav className={`col-md-2 d-md-block bg-dark sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item text-center">
                <h5 className="text-white">Main</h5>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/customers">
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/reports">
                  Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/integrations">
                  Integrations
                </Link>
              </li>
              <li className="nav-item text-center">
                <h5 className="text-white">General</h5>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/settings">
                  <FontAwesomeIcon icon={faCog} className="mr-2" />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className={`col-md-10 ml-sm-auto col-lg-10 px-4 ${sidebarOpen ? 'with-sidebar' : 'without-sidebar'}`}>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <button className="btn btn-custom-color" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <h1 className="h2">Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <FontAwesomeIcon icon={faChartBar} /> Card title
                  </h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <FontAwesomeIcon icon={faUsers} /> Card title
                  </h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <FontAwesomeIcon icon={faCoffee} /> Card title
                  </h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
