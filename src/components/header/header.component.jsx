import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ isCurrentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        {" "}
        SHOP{" "}
      </Link>
      {isCurrentUser ? (
        <div onClick={() => auth.signOut()} className="option"> SIGN OUT</div>
      ) : (
        <Link className="option" to="/signin">
          {" "}
          SIGN IN
        </Link>
      )}

      <Link className="option" to="/shop">
        {" "}
        ABOUT US
      </Link>
    </div>
  </div>
);

export default Header;
