import React, { useState, FormEvent } from 'react';
import './App.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
      setError('');
    }
  };

  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl d-flex justify-content-center align-items-center py-5 bg-dark hero-header" style={{ height: '100vh' }}>
        <div className="card w-50">
          <div className="text-center border-0 pt-3">
            <h5 className="section-title ff-secondary fs-2 text-center text-danger fw-normal">
              Log-in
            </h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Email" name="user" />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button type="submit" name="submit" className="col-5 btn btn-danger mt-3 w-100">Login</button>
              <a className="justify-content-center d-flex py-2" href="signup.php">Don't have an account?</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
