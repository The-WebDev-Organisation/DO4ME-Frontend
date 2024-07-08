import React from "react";
import "../Styles/sign.css";
import ladder from "../images/ladder.jpg";
import googleLogo from "../images/google.png";
import fbLogo from "../images/facebook.png";

const Sign = () => {
  return (
    <section>
      <div className="sign">
        <div className="logo"></div>
        <div className="sign__container h-20">
          <div className="form-header">
            <h1 className="header">Sign In</h1>
            <div className="social-login">
              <button className="social-item">
                <img src={googleLogo} alt="Google logo" />
                <span>Sign in with Google</span>
              </button>
              <button className="social-item">
                <img src={fbLogo} alt="Facebook logo" />
                <span>Sign in with Facebook</span>
              </button>
            </div>
          </div>

          <form className="signInform mt-5">
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
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <footer className="bg-[#68f0fa] py-1 sm:py-2   ">
          <p className="text-center font-sans">
            Sign in to access services on DO4ME !
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Sign;
