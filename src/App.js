//Import Package
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

//Views
import Wrapper from "./Views/Wrapper";
import Home from "./Content/Home";
import Detail from "./Content/Detail";
import Cart from "./Content/Cart";
import Whislist from "./Content/whislist";
import store from "./Publics/Redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Wrapper} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/whislist" component={Whislist} />
      </Router>
    </Provider>
  );
}

export default App;
