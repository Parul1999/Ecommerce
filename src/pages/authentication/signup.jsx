import { NavLink } from 'react-router-dom'
import '../authentication/authentication.css'
export default function SignUp(){
    return(
   <>

  <div className="box-form">
    <div className="form-left">
      <h1>Hi!!</h1>
      <p>
        Welcome to your own Sharky Store !! Hope you love our products. Keep
        Shopping !!
      </p>
    </div>

    <div className="form-right">
      <h1>Sign Up</h1>
      <p>Already have an account? <NavLink to="/login">Login to your account</NavLink></p>

      <div className="field">
        <input className="input" type="text" name="fname" id="fname" placeholder="sharkyui" autoComplete="off" />
        <label className="label" htmlFor="fname">First Name</label>
      </div>

      <div className="field">
        <input className="input" type="text" name="lname" id="lname" placeholder="sharkyui" autoComplete="off" />
        <label className="label" htmlFor="lname">Last Name</label>
      </div>

      <div className="field">
        <input className="input" type="email" name="email" id="email" placeholder="sharky@example.com" autoComplete="off" />
        <label className="label" htmlFor="email">Email</label>
      </div>

      <div className="field">
        <input className="input passwords" type="password" name="password" id="password" placeholder="*"
          autoComplete="off" />
        <label className="label" htmlFor="password">Password</label>
      </div>

      <div className="field">
        <input className="input passwords" type="password" name="confirm-password" id="confirm-password" placeholder="*"
          autoComplete="off" />
        <label className="label" htmlFor="confirm-password">Confirm Password</label>
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
       
      </div>
      <button className="btn btn-primary btn-log-sign">Sign Up</button>
    </div>
  </div>

</>
    )
}