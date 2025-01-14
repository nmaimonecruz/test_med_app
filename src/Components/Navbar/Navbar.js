import "./Navbar.css";

import Landing_Page from '../Landing_Page/Landing_Page.js';
import InstantConsultation from '../InstantConsultation/InstantConsultation';
import Login from '../Login/Login';
import Sign_Up from '../Sign_Up/Sign_Up';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
       <nav>
        <div className="nav__logo">
          <a href="/">
            StayHealthy Inc.
          </a>
          <span>.</span>
        </div>
        <div className="nav__icon">
          <i className="fa fa-times fa fa-bars"></i>
        </div>

        <ul className="nav__links active">
          <li className="link">
            <Link to="/Landing_Page" exact component={Landing_Page}> Home </Link> 
          </li>
          <li className="link">
            <a href="#">Health Blog</a>
          </li>
          <li className="link">
           <Link to="/InstantConsultation" exact component={InstantConsultation}> Instant Consultation </Link>
          </li>
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          <li className="link">
            <a href="#">Reviews</a>
          </li>
          <li className="link">
           <Link to="/Sign_Up" exact component={Sign_Up}>
              <button className="btn1">Sign Up</button>
            </Link>
          </li>
          <li className="link">
           <Link to="/Login" exact component={Login}>
              <button className="btn1">Login</button>
            </Link>
          </li>
        </ul>
    </nav>
    );
}

export default Navbar;
