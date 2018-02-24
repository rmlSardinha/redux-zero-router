import React, { Component } from 'react';

import { connect } from "redux-zero/react";
import actions from "./actions";

const mapToProps = ({ count }) => ({ count });

export default connect(mapToProps, actions)(
  ({ count, decrement, increment  }) => (
    <div>
      <h1>Route 2 | State -> {count}</h1>
      <div>
        <button onClick={decrement}>
          decrement
        </button>
        <button onClick={increment}>
          increment
        </button>
      </div>
    </div>
  )
);

