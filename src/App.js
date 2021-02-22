import "./App.scss";

import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";

import { auth, createUserProfileDoc } from "./firebase/firebase-service";

import AuthenticationPage from "./pages/authentication/AuthenticationPage";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import { setCurrentUser } from "./redux/user/user-actions";
import { connect } from "react-redux";

function App({ setCurrentUser }) {
  const [userState, setUserState] = useState({
    currentUser: null,
    fetched: false,
  });

  useEffect(async () => {
    const authSubscription = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ ...snapShot.data() });
          setUserState({ currentUser: snapShot, fetched: true });
        });
      }
      setCurrentUser(user);
    });
    return authSubscription;
  }, [createUserProfileDoc]);

  return (
    <div>
      {userState.fetched ? (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/login" component={AuthenticationPage} />
          </Switch>
        </Router>
      ) : (
        <div></div>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
