import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function validateEmail(email) {
    if (!email) {
      return 'Email is required';
    }
    const isValidEmail = /^\S+@\S+\.\S+$/;
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
    return '';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      navigate('/subscribed', { state: { email } });
    }
  }

  return (
    <form noValidate className='form-container' onSubmit={handleSubmit}>
      <div className='form-header'>
        <small>Email address</small>
        {error && <div className='error-msg'>{error}</div>}
      </div>
      
      <input type='email' name='email' placeholder='email@company.com' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type='submit'>Subscribe to monthly newsletter</button>
    </form>
  );
}

export default Form;
