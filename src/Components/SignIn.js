import React, { useState } from "react";

import { firebaseApp } from "./Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);

  const [signEmail, setSignEmail] = useState("lokesh@gmail.com");
  const [password, setPassword] = useState(123456);
  const [load, setLoad] = useState(false);

  const passChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };
  const emailChange = (e) => {
    const res = e.target.value;
    setSignEmail(res);
  };

  const auth = getAuth(firebaseApp);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      // emailRef.current.value,
      // passwordRef.current.value
      signEmail,
      password
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
    setLoad(true);
    signInWithEmailAndPassword(
      auth,
      // emailRef.current.value,
      // passwordRef.current.value
      signEmail,
      password
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
            onChange={emailChange}
            value={signEmail}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={passChange}
            value={password}
            type="password"
            placeholder="Password"
          />

          <button onClick={signIn}>
            {load ? <div className="spinner"></div> : "Sign in"}
          </button>

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
