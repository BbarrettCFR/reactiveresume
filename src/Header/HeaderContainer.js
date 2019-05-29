import React, { Component, useState } from "react";
import AppContainer from "../AppContainer";

class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>Frontend Developer, Content Creator, Rescue Dog Dad</h3>
      </div>
    );
  }
}
export default HeaderContainer;
