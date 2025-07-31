const e = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "World From React!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e);
