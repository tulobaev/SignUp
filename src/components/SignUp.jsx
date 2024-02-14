import React from "react";
import "./SignUp.css";

function SignUp() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="box" onSubmit={submitHandler}>
        <div className="form">
          <h2>Sign In</h2>
          <div className="inputBox">
            <input type="email" name="email" required="required" />
            <span>Email</span>

            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">SignUp</a>
          </div>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
