import "./Navbar.css";

function Navbar() {
    return (
    <nav>
        <div class="nav__logo">
          <a href="/">
            StayHealthy Inc.
          </a>
          <span>.</span>
        </div>
        <div class="nav__icon" onClick={"handleClick"}>
          <i class="fa fa-times fa fa-bars"></i>
        </div>

        <ul class="nav__links active">
          <li class="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          <li class="link">
            <a href="#">Health Blog</a>
          </li>
          <li class="link">
            <a href="#">Appointments</a>
          </li>
          <li class="link">
            <a href="#">Reviews</a>
          </li>
          <li class="link">
            <a href="../Sign_Up//Sign_Up.html">
              <button class="btn1">Sign Up</button>
            </a>
          </li>
          <li class="link">
            <a href="../Login/Login.html">
              <button class="btn1">Login</button>
            </a>
          </li>
        </ul>
    </nav>
    );
}

export default Navbar