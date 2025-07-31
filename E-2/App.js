import React from "react";
import ReactDOM from "react-dom/client";

const e = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello React!")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e);
