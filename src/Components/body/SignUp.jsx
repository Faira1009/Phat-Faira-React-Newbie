import React from "react";
import "../../assets/Body/SignUpIn.css";
import { SignUpFunc, readDoc } from "../../Controllers/Controllers";

//firebase

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: "",
      userReType: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.userPassword != this.state.userReType) {
      alert("Password and Retyped Password doesn't match");
    } else {
      let name1 = this.state.userName;
      let pass1 = this.state.userPassword;
      SignUpFunc(name1, pass1);
      readDoc ();
    }
  }

  handleChange(e, type) {
    if (type === "email") {
      this.setState({ userName: e.target.value });
      console.log(this.state.userName);
    }
    if (type === "password") {
      this.setState({ userPassword: e.target.value });
      console.log(this.state.userPassword);
    }
    if (type === "retype") {
      this.setState({ userReType: e.target.value });
      console.log(this.state.userReType);
    }
  }
  render() {
    return (
      <div className="SignUpInDiv">
        <div className="picLogo">Hình 2</div>
        <div className="SignUpIn">
          <div className="Title">logo</div>
          <form className="SignForm" onSubmit={this.handleSubmit}>
            <input
              onChange={(e) => this.handleChange(e, "email")}
              className="SignFormEle"
              type="text"
              placeholder="EMAIL"
              required
            />
            <input
              onChange={(e) => this.handleChange(e, "password")}
              className="SignFormEle"
              type="password"
              placeholder="PASSWORD"
              required
            />
            <input
              onChange={(e) => this.handleChange(e, "retype")}
              className="SignFormEle"
              type="password"
              placeholder="RETYPE PASSWORD"
              required
            />
            <input className="SignFormEle" type="submit" value="SUBMIT" />
          </form>
          <div className="SignMore">more</div>
        </div>
      </div>
    );
  }
}

export default SignIn;
