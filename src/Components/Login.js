import React, { useState } from "react";
import Navbar from "./Navbar";
import SignIn from "./SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("lokesh@gmail.com");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="login">
        {signIn ? (
          <SignIn />
        ) : (
          <div className="login__content">
            <h1>Unlimited films, TV programmes and many more</h1>

            <h3>Watch anywhere, Cancel at any time.</h3>

            <h5>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>

            <div className="login__content--input">
              <input
                value={email}
                onChange={onChange}
                type="email"
                placeholder="Email address"
              />
              <button
                disabled={email.length === 0}
                onClick={() => setSignIn(true)}
                // className={
                //   disabled
                //     ? "login__content--input button2"
                //     : "login__content--input"
                // }
              >
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
