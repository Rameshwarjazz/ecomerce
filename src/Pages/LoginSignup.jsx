import React from 'react'
import   './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className='loginSignup-container'>
        <h1>SignUp</h1>
        <div className='loginSignup-field'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already have an account?<span>Login Here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
