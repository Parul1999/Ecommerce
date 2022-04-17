import { Link ,NavLink} from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import { handleLogout } from '../../methods/methods'
import '../navbar/navbar.css'

export default function Navbar(){
  const {auth} = useAuth()
    return(
        <nav className="desktop-nav navbar sticky">
        <div className="nav-headings">
        <h3> <Link to="/">अपनाstore</Link></h3>
        </div>
       
        <ul className="desktop-nav-list">
         {auth == "" && <li >
            <NavLink to="/signup"
              className="desktop-list-item"
              data-title="SignUp"
            >
            <span className="material-icons-outlined">
              person
              </span>
            </NavLink>
          </li>
        }
       
          <li>
            <NavLink className="desktop-list-item" to="/wishlist"  data-title="Wishlist">
              <span className="material-icons-outlined"> favorite_border </span>
              </NavLink>
          </li>
          <li>
            <NavLink className="desktop-list-item" to="/cart" data-title="cart">
              <span className="material-icons-outlined" > shopping_cart </span></NavLink>
          </li>
          {
          auth !="" && <li>
          <NavLink className="desktop-list-item" to="/"  data-title="logout" onClick={()=>{handleLogout()}}>
              <span className="material-icons-outlined">
                  logout
                  </span>
          </NavLink>
           </li>
        }
        </ul>
      </nav>
    )
}