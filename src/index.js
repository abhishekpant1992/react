import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//ReactDOM.render is Deprectaed in react 18 use insted createRoot method which takes root element as parameter and creates react root
// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
