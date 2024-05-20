import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // You can further process the form data here, like sending it to a server
    // If login is successful, navigate to home page
    navigate('/');
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='text-center mb-4'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter email'
              autoComplete='off'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              autoComplete='off'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>
          <button type='submit' className='btn btn-primary w-100'>Login</button>
          <p className='mt-3 text-center'>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
