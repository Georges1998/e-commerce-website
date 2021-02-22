import "./App.scss";

import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./components/header/Header";

import { auth, createUserProfileDoc } from "./firebase/firebase-service";

import AuthenticationPage from "./pages/authentication/AuthenticationPage";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import CollectionPage from "./pages/collections/CollectionPage";
import { setCurrentUser } from "./redux/user/user-actions";
import { connect } from "react-redux";

function App({ setCurrentUser, currentUser }) {
  useEffect(async () => {
    const authSubscription = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ ...snapShot.data() });
        });
      }
      setCurrentUser(user);
    });
    return authSubscription;
  }, [createUserProfileDoc]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/:category" component={CollectionPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/login">
            {currentUser ? <Redirect to="/" /> : <AuthenticationPage />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
