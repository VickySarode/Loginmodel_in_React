import "./forgot.css"

const Forgot = ()=> {
    return(
        <>
        <div className="container">
            <button className="cross"><i class="fa-solid fa-xmark"></i></button>
            <h2>Forgot?</h2>
            <p className="msg">To reset your password, please enter the email associated with your account.</p><br />
            <p className="uprcs"> Your E-mail adress</p><br />
            <input className="forgot_input" type="Email" placeholder=" Eg. Johnwilson@gmail.com"/>
            <br />
            <button className="btn_submit" type="submit">Submit</button>
            <span>Go back to <a href="/">login</a> </span>
        </div>
        </>
    );
}
export default Forgot;