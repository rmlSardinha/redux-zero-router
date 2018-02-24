import React, { Component } from 'react';

import { connect } from "redux-zero/react";
import actions from "./actions";

const mapToProps = ({ count }) => ({ count });

export default connect(mapToProps, actions)(
  ({ count }) => (
    <div>
      <h1>Route 1 | State -> {count}</h1>
    </div>
  )
);

