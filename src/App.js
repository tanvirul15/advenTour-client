import { createContext, useState } from "react";
import "./App.css";
import Home from "./components/home/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import PackagesPage from "./components/packagesPage/PackagesPage";
import ReviewPage from "./components/reviewPage/ReviewPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ReviewForm from "./components/reviewForm/ReviewForm";
import Checkout from "./components/checkout/Checkout";
import MyOrders from "./components/myOrders/MyOrders";
import Admin from "./components/admin/admin/Admin";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/packages'>
              <PackagesPage />
            </Route>
            <Route path='/reviews'>
              <ReviewPage />
            </Route>
            <PrivateRoute path='/submitReview'>
              <ReviewForm></ReviewForm>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
              <Admin />
            </PrivateRoute>
            <PrivateRoute path='/checkout/:id'>
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path='/myPackages'>
              <MyOrders />
            </PrivateRoute>
            {/* <Route path='/submitReview'>
              <ReviewPage />
            </Route> */}

            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
