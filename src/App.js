import React from "react";
import { Header } from "./Components/Header/Header";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
      </React.Fragment>
    );
  }
}
export default App;