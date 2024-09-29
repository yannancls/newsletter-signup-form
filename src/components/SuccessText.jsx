import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import CheckIcon from '../assets/images/icon-success.svg'

const SuccessText = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email

  return (
    <div className='success-text-container'>
        <img src={CheckIcon} alt='Subscription Success' />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={() => navigate('/')}>Dismiss message</button>
    </div>
  )
}

export default SuccessText