import React from "react";
import ReactDOM from "react-dom/client";

const jsxe = <h1 id="heading">This is Hello in JSX!!</h1>;

const FunctionalComponent = () => (
  <div>
    {jsxe}
    <h1>This is a Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
