import React from "react";
import "../Styles/sign.css";
import googleLogo from "../images/google.png";
import fbLogo from "../images/facebook.png";
import DropdownCard from "./dropdown";

const SignUp = () => {
  return (
    <section>
      <div className="sign">
        <div className="sign__container">
          <div className="form-header">
            <h1 className="header">Create Account.</h1>
            <div className="social-login">
              <button className="social-item">
                <img src={googleLogo} alt="Google logo" />
                <span>Continue with Google</span>
              </button>
              <button className="social-item">
                <img src={fbLogo} alt="Facebook logo" />
                <span>Continue with Facebook</span>
              </button>
            </div>
          </div>
          <form className="signInform mt-5    ">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Create Account</button>
            <div className="footer">
              <span>Already have an account? </span>
              <a href="#">Login</a>
            </div>
          </form>
        </div>
      </div>
      <div>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Cyan
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <footer className="bg-[#68f0fa] py-1 sm:py-2   ">
          <p className="text-center font-sans">Create an account for DO4ME !</p>
        </footer>
      </div>
    </section>
  );
};

export default SignUp;
