import React, { useState } from "react";
import ReactDOM from "react-dom";
import HeaderContainer from "./Header/HeaderContainer";
import AppContainer from "./AppContainer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <HeaderContainer name="Brandon Barrett" />
      <AppContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
