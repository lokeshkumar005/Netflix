import { useEffect } from "react";
import "./Sass/App.scss";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "./Components/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./ReduxFeature/userSlice";
import MyList from "./Components/MyList";

function App() {
  const user = useSelector(selectUser);
  const auth = getAuth(firebaseApp);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/mylist" element={<MyList />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
