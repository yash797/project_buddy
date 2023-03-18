import React, { useEffect } from 'react';
import './login.css';

function Login() {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );

    signInButton.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );

    return () => {
      signUpButton.removeEventListener("click", () =>
        container.classList.add("right-panel-active")
      );
      signInButton.removeEventListener("click", () =>
        container.classList.remove("right-panel-active")
      );
    };
  }, []);

  return (
    <div className="auth-body">
      <section>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Sign Up</h1>
              <span className="span-text">
                Or use your Email for registration
              </span>
              <label>
                <input type="text" placeholder="First Name" name="first_name" />
              </label>
              <label>
                <input type="text" placeholder="Last Name" name="last_name" />
              </label>
              <label>
                <input type="email" placeholder="Email" name="email" />
              </label>
              <label>
                <input type="text" placeholder="username" name="username" />
              </label>
              <label>
                <input type="password" placeholder="Password" name="password" />
              </label>
              <label>
                <input type="password" placeholder="Confirm Password" />
              </label>
              <button className="button-auth mt-5">Sign In</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign In</h1>

              <label>
                <input type="email" placeholder="Email" name="email" />
              </label>
              <label>
                <input type="text" placeholder="username" name="username" />
              </label>
              <label>
                <input type="password" placeholder="Password" name="password" />
              </label>
              <label>
                <input type="password" placeholder="Confirm Password" />
              </label>
              <a className="a-password-forget hover:text-cyan-400" href="/">
                Forgot your password?{" "}
              </a>
              <button className="button-auth">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Log in</h1>
                <p sign-text>Sign in here if you already have an account </p>
                <button className="button-auth ghost mt-5" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Create, Account!</h1>
                <p className="sign-text">
                  Sign up if you still don't have an account ...{" "}
                </p>
                <button className="button-auth ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
