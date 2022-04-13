import { NavLink } from 'react-router-dom'
import '../authentication/authentication.css'
export default function ForgotPassword(){
    return(
   <>

  <div className="box-form">
    <div className="form-left">
      <h1>Hi!!</h1>
      <p>
        You forgot your password but don't worry !! We are there for you !!
      </p>
    </div>

    <div className="form-right">
      <h1>Forgot Password?</h1>
    
      <div className="field">
        <input className="input" type="email" name="email" id="email" placeholder="sharky@example.com" autoComplete="off" />
        <label className="label" htmlFor="email">Email</label>
      </div>

      <div className="remember-forget-wrap ">
        <p><NavLink to="/login" id="back-login-click" className="anchor-link"><span className="material-icons-outlined">
              arrow_back
            </span> Back To Login</NavLink></p>
      </div>
      <button className="btn btn-primary btn-log-sign
        ">Submit</button>
    </div>
  </div>

</>
    )
}