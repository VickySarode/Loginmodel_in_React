import "./register.css"


const Register = () => {
    return (
        <>
            <div className="container2">
                <button className="cross"><i class="fa-solid fa-xmark"></i></button>
                <h1 className="head-1">Register</h1>
                <div className="icons-1">
                    <div className="icn facebook">
                        <a href="/"><i class="fa-brands fa-square-facebook"></i> &nbsp; FACEBOOK</a>
                    </div>

                    <div className="icn twitter">
                        <a href="/"><i class="fa-brands fa-twitter"> </i>&nbsp; TWITTER</a>
                    </div>
                </div>
                <br />
                <hr />

                <div className="reg_inp">
                    <div className="username text_trans">
                        <p><b>Username</b></p>
                        <input type="username" />
                    </div>
                    <div className="email text_trans">
                        <p><b>E-mail</b></p>
                        <input type="email" placeholder="eg. johnwilson@gmail.com" />
                    </div>

                    <div className="pass text_trans">
                        <p><b>Password</b></p>
                        <input type="password" />
                    </div>

                    <div className="conform_pass text_trans">
                        <p><b>Conform password</b></p>
                        <input type="password" />
                    </div>
                </div>
                <br />
                <div className="chkbx">
                    <input type="checkbox" /> &nbsp; <p className="tc">I agree with our <a className="hvr" href="/">User Agreement</a> & <a className="hvr" href="/">Privacy Policy</a></p>
                </div>
                <br />
                <button className="btn_submit" type="submit">Register</button>
                <br />
                <span id="end">Already Registered? <a className="hvr" href="/">Login now</a> </span>
            </div>
        </>
    );
}
export default Register;