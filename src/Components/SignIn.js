import React, { useRef } from "react";

import { firebaseApp } from "./Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn({ email }) {
  const emailRef = useRef(null);
  const registerRef = useRef(null);

  const auth = getAuth(firebaseApp);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      registerRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      registerRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="SignIn">
        <form className="SignIn__content">
          <h1 className="SignIn__heading">Sign In</h1>

          <input
            ref={emailRef}
            value={email}
            type="email"
            placeholder="Email"
          />
          <input ref={registerRef} type="password" placeholder="Password" />

          <button onClick={signIn}>Sign In</button>

          <p className="SignIn__footer">
            New to Netflix?{" "}
            <a className="SignIn__footer--a" href="/" onClick={register}>
              Sign up now
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
