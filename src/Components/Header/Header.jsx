import React from "react";
import "../../assets/Header/Header.css";

export function Header(props) {
  return (
    <div className="Header">
      <div className="Logo">LOGO</div>
      <div className="HeaderRight">
        <div className="signUpTag">
          <div className="signUpTagRight">
              <p className="signUpEle">NOTIFICATION </p>
              <p className="signUpEle">HELP CENTER</p>
              <p className="signUpEle">SIGN UP</p>
              <p className="signUpEle">SIGN IN</p>
          </div>
        </div>
        <div className="searchTag">
          <div className="input">
            <input className="inputBar" type="text" placeholder="e.g. Bút chì" />
          </div>
          <div className="cart">cart</div>
        </div>
      </div>
    </div>
  );
}
