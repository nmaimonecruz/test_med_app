import "./Login.css";

function Login() {
    return (
        <div className="container">
        <div className="login-grid">
        <div className="login-text">
            <h2>Login</h2>
          </div>
        <div className="login-text">
            Not a memeber yet? <span><a href="../Sign_Up/Sign_Up.html" style="color: #2190FF;"> Sign Up Here</a></span>
        </div>
          <br />
        <div className="login-form">
            <form>
              <div className="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="ex:youremail@email.com" aria-describedby="helpId" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
              </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                <br> </br>
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
              </div>
              <br />
              <div className="login-text">
                Forgot Password? <span><a href="../Forgot_Password/Forgot_Password.html" style="color: #2190FF;"> Click Here</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;
