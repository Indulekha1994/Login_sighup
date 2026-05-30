import React, { useState } from 'react';
import './login.css';


import user_icon from '../Asset/user_icon.png';
import email_icon from '../Asset/email_icon.png';
import password_icon from '../Asset/password_icon.png';

const Login = () => {
  const[action,setAction]= useState('Login');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const validatePassword = (value) => {

    setPassword(value);

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(value)) {
      setError(
        'Password must contain 8 characters, one uppercase letter, one number and one special character'
      );
    } else {
      setError('');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div> }

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Address' />
        </div> 
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' value={password}
            onChange={(e) => validatePassword(e.target.value)}/>
        </div> 
                {error && <p className="error">{error}</p>}

      </div>
      {action==="Login"?<div className="forgot_password">Lost Password?<span>Click Here</span></div>:<div></div>}
      <div className="submit-container">
        <div className={action==="login"?"submit gray":"submit"} onClick={() => setAction('sigh Up')}>sigh Up</div>
        <div className={action==="sigh Up"?"submit gray":"submit"} onClick={() => setAction('Login')}>Login</div>
      </div>
    </div>

  )
}

export default Login