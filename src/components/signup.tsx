import React, { useState, FormEvent } from 'react';
import './App.css';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !birthdate || !sex || !contact || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Birthdate:', birthdate);
      console.log('Sex:', sex);
      console.log('Contact:', contact);
      console.log('Email:', email);
      console.log('Password:', password);
      setError('');
    }
  };

  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl d-flex justify-content-center align-items-center pt-5 bg-dark hero-header" style={{ height: '100vh' }}>
        <div className="card w-75">
          <div className="text-center border-0 pt-3">
            <h5 className="section-title ff-secondary fs-2 text-center text-danger fw-normal">
              Sign Up
            </h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label htmlFor="birthdate" className="form-label">Birthdate:</label>
                <input type="date" className="form-control" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label htmlFor="sex" className="form-label">Sex:</label>
                <select className="form-select" id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="contact" className="form-label">Contact:</label>
                <input type="text" className="form-control" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {error && <p className="error-message col-12">{error}</p>}
              <div className="col-12">
                <button type="submit" className="btn btn-danger mt-3 w-100">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
