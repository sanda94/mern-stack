import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.scss'; // Create a CSS file for custom styles

function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Products</h1>
          </div>
          <div className="row">
            {products.map(product => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4 shadow-sm">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                    <a href="#" className="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
