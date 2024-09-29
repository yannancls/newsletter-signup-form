import React from 'react'
import Form from './Form'

const TextDetails = () => {
  return (
    <div className='text-details-container'>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a succes</li>
            <li>And much more!</li>
        </ul>

        <Form />
    </div>
  )
}

export default TextDetails