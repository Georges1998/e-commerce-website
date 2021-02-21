import React, { useState, useEffect } from "react";

import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import AuthenticationPage from "./pages/authentication/AuthenticationPage";
import Header from "./components/header/Header";

import { auth } from "./firebase/firebase-service";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";

function App() {
  const [userState, setUserState] = useState({
    currentUser: null,
    fetched: false,
  });

  useEffect(() => {
    const authSubscription = auth.onAuthStateChanged((user) => {
      setUserState({ currentUser: user, fetched: true });
    });

    return authSubscription;
  }, []);

  return (
    <div>
      {userState.fetched ? (
        <Router>
          <Header currentUser={userState.currentUser} />
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

export default App;
