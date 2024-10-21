import "./Sign_Up.css";

function Sign_Up() {
    return (
            <div class="container" style="margin-top: 5%;">
        <div class="signup-grid">
            <div class="signup-text" style="text-align: left;">
                <h1>Sign Up</h1>
            </div>
            <div class="signup-text1" style="text-align: left;">
                Already a member? <span><a href="../Login/Login.html" style="color: #2190FF;"> Login</a></span>
            </div>
            <div class="signup-form">
                <form>
                    <div class="form-group"> 
                        <label for="Role">Role</label> 
                        <input type="select" name="role" id="role" required class="form-control" placeholder="Select Role" aria-describedby="helpId"/> 
                    </div>

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required class="form-control" placeholder="Enter name here" aria-describedby="helpId" /> 
                    </div>

                    <div class="form-group"> 
                        <label for="phone">Phone</label> 
                        <input type="tel" name="phone" id="phone" required class="form-control" placeholder="( ) _ _ _ - _ _ _ _" aria-describedby="helpId" /> 
                    </div>

                    <div class="form-group"> 
                        <label for="email">Email</label> 
                        <input type="email" name="email" id="email" required class="form-control" placeholder="ex: youremail@email.com" aria-describedby="helpId" /> 
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label> 
                        <input name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    </div>

                    <div class="btn-group" style="align-content: center;"> 
                        <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                        <br></br>
                        <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button> 
                    </div>
                </form>
            </div>
        </div>
    </div>

)};

export default Sign_Up