import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Router>
  );
}

export default App;
