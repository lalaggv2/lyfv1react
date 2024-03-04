import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login"> Olvido su clave? <span>Login here</span>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id='' />
          <p>Al continuar, acepto los terminos de uso</p>
        </div>

        </p>
      </div>
    </div>
  )
}

export default LoginSignup