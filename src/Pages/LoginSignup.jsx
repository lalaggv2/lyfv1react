import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Ingresar</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Nombre' />
          <input type="email" placeholder='Correo electronico' />
          <input type="password" placeholder='Contrasena' />
        </div>
        <button>Continue</button>
        <p>
        <p className="loginsignup-login"> Olvido su clave? </p>
        <p className='loginsignup-registro'>Registrarse</p>
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