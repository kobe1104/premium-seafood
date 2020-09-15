import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Order from "./components/Order";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/premium-seafood/order" component={Order} />
          <Route path="/premium-seafood/contact" component={Contact} />
          <Route path="/premium-seafood" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
