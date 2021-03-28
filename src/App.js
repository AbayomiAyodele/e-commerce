import React from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyles } from "globalStyles";
import { Details, Navbar, Products, Cart, Default } from "components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />

      <Switch>
        <Route exact path='/' component={Products} />

        <Route path='/details' component={Details} />

        <Route path='/cart' component={Cart} />

        <Default />
      </Switch>
    </>
  );
}

export default App;
