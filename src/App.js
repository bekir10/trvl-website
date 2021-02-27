import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
