import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/homepage";
import ProductListPage from "./containers/ProductListPage/productlistpage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage/productdetailspage";
import CartPage from "./containers/CartPage/cartpage";
import CheckoutPage from "./containers/CheckoutPage/checkoutpage";
import OrderPage from "./containers/OrderPage/orderpage";
import OrderDetailsPage from "./containers/OrderDetailsPage/orderdetailspage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);

  useEffect(() => {
    if (!auth?.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth?.authenticate, dispatch]);

  useEffect(() => {
    // ("App.js - updateCart");
    dispatch(updateCart());
  }, [auth?.authenticate, dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
