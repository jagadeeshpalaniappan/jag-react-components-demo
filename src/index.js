import React from "react";
import ReactDOM from "react-dom";
import JagTestComponentDefault, {
  JagTestComponent1,
  JagTestComponent2
} from "jag-react-components";
// Add: css
import "jag-react-components/build/static/css/index.css";

import SimpleOffcanvasDemo from "./SimpleOffcanvasDemo/SimpleOffcanvasDemo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h3 className="title">Components Demo: </h3>
      <hr />
      <h3>Component 1: </h3>
      <JagTestComponentDefault />
      <hr />
      <h3>Component 2: </h3>
      <JagTestComponent1 />
      <hr />
      <h3>Component 3: </h3>
      <JagTestComponent2 color="deepskyblue" />

      <hr />
      <h3>Component 3: </h3>
      <SimpleOffcanvasDemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
