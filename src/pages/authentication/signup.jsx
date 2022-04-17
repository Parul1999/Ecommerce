import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../authentication/authentication.css'
import axios from 'axios'
import { useAuth } from '../../context/auth-context'
export default function SignUp(){
  const [userData,setUserData]=useState({firstName: "",lastName:"",email:"",password:""})
  const [passwordShow,setPasswordShow] = useState(false)
  const updateUserData=(e)=>{
   setUserData(userData=>({
     ...userData,
     [e.target.name]:e.target.value,
   }))
  }
  const {  setAuth } = useAuth();
  const navigate = useNavigate();
  //once the login is done , do navigation
  const location = useLocation();
  
  const handleSignUp=async ()=>{
    try{
       const response = await axios.post(`/api/auth/signup`,userData);
       if (response.status === 201) {
        setAuth(response.data.encodedToken);
        localStorage.setItem("token", response.data.encodedToken);
        //checking location.state != null , because when it throws undefined
        // it does not redirect to 404 page
        if (location.state != null) {
          navigate(location?.state?.from?.pathname, {
            replace: true,
          });
        } else {
          //If the page was refreshed , i.e no initial location then move to home page
          navigate("/", {
            replace: true,
          });
        }
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
        Welcome to your own अपनाstore !! Hope you love our products. Keep
        Shopping !!
      </p>
    </div>

    <div className="form-right">
      <h1>Sign Up</h1>
      <p>Already have an account? <NavLink to="/login">Login to your account</NavLink></p>

      <div className="field">
        <input className="input" type="text" name="firstName" id="firstName" placeholder="अपनाui" autoComplete="off" onChange={updateUserData}/>
        <label className="label" htmlFor="firstName">First Name</label>
      </div>

      <div className="field">
        <input className="input" type="text" name="lastName" id="lastName" placeholder="अपनाui" autoComplete="off" onChange={updateUserData}/>
        <label className="label" htmlFor="lastName">Last Name</label>
      </div>

      <div className="field">
        <input className="input" type="email" name="email" id="email" placeholder="अपनाstore@example.com" autoComplete="off" onChange={updateUserData}/>
        <label className="label" htmlFor="email">Email</label>
      </div>

      <div className="field">
        <input className="input passwords"  type={passwordShow ? "text" : "password"}  name="password" id="password" placeholder="*"
          autoComplete="off"  onChange={updateUserData}/>
        <label className="label" htmlFor="password">Password</label>
      </div>

      <div className="field">
        <input className="input passwords"  type={passwordShow ? "text" : "password"}  name="confirm-password" id="confirm-password" placeholder="*"
          autoComplete="off" />
        <label className="label" htmlFor="confirm-password">Confirm Password</label>
      </div>

      <div className="remember-forget-wrap ">
        <label>
          <input type="checkbox" className="check-box show-pswd" checked={passwordShow}
           onChange={(e)=>setPasswordShow(!passwordShow)}/>
          <span className="text-checkbox">Show Passwords</span>
        </label>
       
       
      </div>
      <button className="btn btn-primary btn-log-sign" onClick={handleSignUp}>Sign Up</button>
    </div>
  </div>

</>
    )
}