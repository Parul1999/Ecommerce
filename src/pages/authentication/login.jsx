import { NavLink } from 'react-router-dom'
import '../authentication/authentication.css'
export default function Login(){
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
        <input className="input" type="email" name="email" id="email" placeholder="sharky@example.com" autoComplete="off" />
        <label className="label" htmlFor="email">Email</label>
      </div>

      <div className="field">
        <input className="input passwords" type="password" name="password" id="password" placeholder="*"
          autoComplete="off" />
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

      <button className="btn btn-primary btn-log-sign ">Login</button>
    </div>
  </div>
  </div>

</>
    )
}