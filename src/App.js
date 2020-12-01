import React from "react";
import  SignUp from "./Components/body/SignUp";
import  SignIn from "./Components/body/SignIn";
import { Header } from "./Components/Header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      at: "SignUp",
    };
  }

  render() {
    let option = {
      Home: <Header />,
      SignUp: <SignUp/>,
      SignIn: <SignIn/>,
    };
    return (
      <React.Fragment>
        {option[this.state.at]}
      </React.Fragment>
    );
  }
}
export default App;
