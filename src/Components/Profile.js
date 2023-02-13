import { getAuth } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import proIcon from "../Image/avatar.webp";
import { selectUser } from "../ReduxFeature/userSlice";
import { firebaseApp } from "./Firebase";
import Navbar from "./Navbar";

function Profile() {
  const user = useSelector(selectUser);

  const auth = getAuth(firebaseApp);

  return (
    <>
      <div className="profile">
        <Navbar />
        <div className="profile__container">
          <h1>MY PROFILE</h1>
          <div className="profile__info">
            <img src={proIcon} alt="proIcon" />
            <div className="profile__detail">
              <h2>Email - {user.email}</h2>
              <h3>Current plan - Monthly 499rs</h3>
              <button onClick={() => auth.signOut()}>Sign out</button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Profile;
