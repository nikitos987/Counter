import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import "./App.css";

function mapStateToProps(state) {
  return {
    countValue: state.count,
  };
}

// Action
const increaseAction = { type: "increase" };
const decreaseAction = { type: "decrease" };

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function () {
      return dispatch(increaseAction);
    },
    decreaseCount: function () {
      return dispatch(decreaseAction);
    },
  };
}

// HOC-Component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default connectedComponent;
