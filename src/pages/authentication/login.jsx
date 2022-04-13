import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../authentication/authentication.css'
import axios from 'axios'
import { useAuth } from '../../context/auth-context'

export default function Login(){

  const [userData,setUserData]=useState({email:"",password:""})
  const updateUserData=(e)=>{
   setUserData(userData=>({
     ...userData,
     [e.target.name]:e.target.value,
   }))
 
  }
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  //once the login is done , do navigation
  const location = useLocation();

  const handleLogin= async ()=>{
    try{
       const response = await axios.post('/api/auth/login', userData)
       if(response.status===200){
        setAuth((auth) => !auth);
         // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        //checking location.state != null , because when it throws undefined
        // it does not redirect to 404 page
        navigate(location.state != null && location?.state?.from?.pathname, {
          replace: true
        });
       }
    }
    catch(err){
      console.log(err)
    }
  }
 
    return(
   <>

  <div className="box-form">
    <div className="form-left">
      <h1>Hi!!</h1>
      <p>
        Welcome back to your own Sharky Store !! Glad to see you back. Keep
        Shopping !!
      </p>
    </div>

    <div className="form-right">
      <h1>Login</h1>
      <p>
        Don't have an account? <NavLink to="/signup">Create Your Account</NavLink>
      </p>

      <div className="field">
        <input className="input" type="email" name="email" id="email" placeholder="sharky@example.com" autoComplete="off" onChange={updateUserData} />
        <label className="label" htmlFor="email">Email</label>
      </div>

      <div className="field">
        <input className="input passwords" type="password" name="password" id="password" placeholder="*"
          autoComplete="off" onChange={updateUserData} />
        <label className="label" htmlFor="password">Password</label>
      </div>

      <div className="remember-forget-wrap ">
        <label>
          <input type="checkbox" className="check-box show-pswd" />
          <span className="text-checkbox">Show Passwords</span>
        </label>
        <label>
          <input type="checkbox" name="item" checked className="check-box" />
          <span className="text-checkbox">Remember me</span>
        </label>
        <p className="forgot-pswd"><NavLink to="/forgotpassword" id="forgetpswd-click" className="anchor-link">forgot password?</NavLink></p>

      <button className="btn btn-primary btn-log-sign" onClick={handleLogin}>Login</button>
    </div>
  </div>
  </div>

</>
    )
}