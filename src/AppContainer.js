import React, { Component } from "react";
import HeaderInformation from "./Header/HeaderInformation";
import "./styles.css";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

  render() {
    const { showing } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ showing: !showing })}>
          see more
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
