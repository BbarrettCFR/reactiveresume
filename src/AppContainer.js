import React, { Component } from "react";
import HeaderInformation from "./Header/HeaderInformation";
import "./styles.css";
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: false, label: "see more" };
  }

  render() {
    const { showing } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ showing: !showing, label: "see less" })}>
          {this.state.label}
        </button>
        {showing ? (
          <div>
            <HeaderInformation />
          </div>
        ) : null}
      </div>
    );
  }
}
export default AppContainer;

