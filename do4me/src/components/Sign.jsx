import React from 'react';
import "../Styles/sign.css";
import ladder from "../images/ladder.jpg";
import googleLogo from "../images/google.png";
import fbLogo from "../images/facebook.png"; 

const Sign = () => {
    return (
        <div className="sign">
            <div className='logo'>
                <img src={ladder} alt="ladder" className='ladder' />
            </div>
            <div className="sign__container">
                <div className='form-header'>
                    <h1 className='header'>Sign In</h1>
                    <div className='social-login'>
                        <button className='social-item'>
                            <img src={googleLogo} alt="Google logo" /> 
                            <span>Continue with Google</span>
                        </button>
                        <button className='social-item'>
                            <img src={fbLogo} alt="Facebook logo" /> 
                            <span>Continue with Facebook</span>
                        </button>
                    </div>
                </div>
                <h1 className='or'>-OR-</h1>
                <form className="signInform">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <div className="options">
                        <label>
                            <input type="checkbox" className="mr-1" /> Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button>Sign In</button>
                    <div className="footer">
                        <span>Don’t have an account? </span>
                        <a href="#">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sign;
