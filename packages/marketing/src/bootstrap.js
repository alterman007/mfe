import React from "react";
import ReactDOM from "react-dom";
import App from './App';

function mount(el) {
  ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#marketing-dev-root");
  if (el) {
    mount(el);
  }
}

export { mount };
