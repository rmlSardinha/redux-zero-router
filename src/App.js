import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { connect } from "redux-zero/react";
import actions from "./actions";

import View1 from "./View1";
import View2 from "./View2";

const mapToProps = ({ count, nome }) => ({ count, nome });

const s = { margin: 20, padding: 10, border: "solid 1px" };

export default connect(mapToProps, actions)(
  ({ count, nome, decrement, increment }) => (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/view1"> Route 1 </Link>
          <Link to="/view2"> Route 2 </Link>
        </header>

        <h1>
          {nome} - State -> {count}
        </h1>
        <div>
          <button onClick={decrement}>decrement</button>
          <button onClick={increment}>increment</button>
        </div>

        <main style={s}>
          <Switch>
            <Route path="/view1" component={View1} />
            <Route path="/view2" component={View2} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
);
