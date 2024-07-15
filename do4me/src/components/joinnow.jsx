import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/sign.css";
import googleLogo from "../images/google.png";
import fbLogo from "../images/facebook.png";

const SignUp = () => {
  const [userType, setUserType] = useState("normal");
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    if (type === "artisan") {
      navigate("/artisan-signup");
    } else {
      setUserType("normal");
    }
  };

  return (
    <section>
      <div className="sign">
        <div className="sign__container">
          <div className="form-header">
            <h1 className="header">Create Account</h1>
            <div className="user-type-selector mb-4">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio"
                  name="userType"
                  value="normal"
                  checked={userType === "normal"}
                  onChange={() => handleUserTypeChange("normal")}
                />
                <span className="ml-2"> User</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="userType"
                  value="artisan"
                  checked={userType === "artisan"}
                  onChange={() => handleUserTypeChange("artisan")}
                />
                <span className="ml-2">Artisan</span>
              </label>
            </div>
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
          <form className="signInform mt-5">
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
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <footer className="bg-[#68f0fa] py-1 sm:py-2">
          <p className="text-center font-sans">Create an account for DO4ME !</p>
        </footer>
      </div>
    </section>
  );
};

export default SignUp;
