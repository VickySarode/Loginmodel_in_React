import "./login.css"


const Login= ()=>{
    return (
        <>
        <div className="container">
            <button className="cross"><i class="fa-solid fa-xmark"></i></button>


            <h1>Login</h1>


            <div className="icons">
                <div className="icn facebook">
                <a href="/"><i class="fa-brands fa-square-facebook"></i> &nbsp; FACEBOOK</a>
                </div>

                <div  className="icn twitter">
                <a href="/"><i class="fa-brands fa-twitter"> </i>&nbsp; TWITTER</a>
                </div>
            </div>
            <br />
            <hr />


            <div className="username text_trans">
                <p>Username</p>
                <input type="username" />
            </div>



            <div className="pass text_trans"> 
                <p>Password</p>
                <input type="password" />
            </div>

            <a className="anchor hvr_org" href="/">Forgot Password?</a>
            <br />
            <br />

            <button className="btn_submit" type="submit">Submit</button>
            <br />
            <span>Don't have a login? <a href="/">Register now</a> </span>




        </div>
        
        
        
        
        
        
        </>


    );
}
export default Login;
