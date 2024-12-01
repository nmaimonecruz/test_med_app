import "./Sign_Up.css";

function Sign_Up() {
    return (
            <div className="container" style={{margin-top: "5%"}}> //example updated for future reference NINA LOOK HERE
        <div className="signup-grid">
            <div className="signup-text" style="text-align: left;">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style="text-align: left;">
                Already a member? <span><a href="../Login/Login.html" style="color: #2190FF;"> Login</a></span>
            </div>
            <div className="signup-form">
                <form>
                    <div className="form-group"> 
                        <label for="Role">Role</label> 
                        <input type="select" name="role" id="role" required className="form-control" placeholder="Select Role" aria-describedby="helpId"/> 
                    </div>

                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter name here" aria-describedby="helpId" /> 
                    </div>

                    <div className="form-group"> 
                        <label for="phone">Phone</label> 
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="( ) _ _ _ - _ _ _ _" aria-describedby="helpId" /> 
                    </div>

                    <div className="form-group"> 
                        <label for="email">Email</label> 
                        <input type="email" name="email" id="email" required className="form-control" placeholder="ex: youremail@email.com" aria-describedby="helpId" /> 
                    </div>

                    <div className="form-group">
                        <label for="password">Password</label> 
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    </div>

                    <div className="btn-group" style="align-content: center;"> 
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                        <br></br>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button> 
                    </div>
                </form>
            </div>
        </div>
    </div>

);
}

export default Sign_Up;
