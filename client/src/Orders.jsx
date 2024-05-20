import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.scss';

function Orders() {
  const navigate = useNavigate();

  const orders = [
    { id: 1, customer: 'John Doe', total: '$50.00', date: '2023-05-15' },
    { id: 2, customer: 'Jane Smith', total: '$150.00', date: '2023-05-16' },
    { id: 3, customer: 'Bob Johnson', total: '$200.00', date: '2023-05-17' },
  ];

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Orders</h1>
            <button className="btn btn-secondary" onClick={handleBack}>Back to Home</button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.total}</td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Orders;
