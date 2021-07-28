import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import store from "./store";
import * as actionTypes from "./store/actionTypes";

export class Checkinfo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return <Fragment></Fragment>;
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

Checkinfo.propTypes = {};

export default Checkinfo;
