import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FacultyLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[newemail, setnewemail]=useState();
  const[newpassword, setnewpassword]=useState();

  //const handleSubmit = (e) => {
    //e.preventDefault();
    // Add your authentication logic here for faculty login
    //console.log('Faculty Login:', email, password);
  //};
  const handleSubmit=(e)=>{
      e.preventDefault();
      setnewemail(email)
      setnewpassword(password)
  }
  return (
    <div>
      <h2>Faculty Sign-In</h2>
      <p>{newemail}</p>
      <p>{newpassword}</p>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'><strong>Email:</strong></label>
          <input type='email' placeholder='Enter email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password'><strong>Password:</strong></label>
          <input type='password' placeholder='Enter password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0'/>
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
      </form>
    </div>
  );
}

function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here for admin login
    console.log('Admin Login:', email, password);
  };

  return (
    <div>
      <h2>Admin Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'><strong>Email:</strong></label>
          <input type='email' placeholder='Enter email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password'><strong>Password:</strong></label>
          <input type='password' placeholder='Enter password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0'/>
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <FacultyLoginForm />
        <AdminLoginForm />
      </div>
    </div>
  );
}

export default App;
