import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
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
    console.log('Form Data:', formData);
    axios.post('http://localhost:3300/register', formData)
      .then(result => {
        console.log(result.data); // Handle success response
        navigate('/login'); // Correctly navigate to login page
      })
      .catch(err => {
        console.error(err); // Handle error
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-75'>
        <h2 className='text-center'>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter name'
              autoComplete='off'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>
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
          <div className='text-center'>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </div>
          <p className='mt-3 text-center'>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
