import * as React from 'react';
import { render } from "react-dom";
import TextFit from "./TextFit";

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <TextFit length={10}>lorem ipsum dollar per solarium.</TextFit>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
