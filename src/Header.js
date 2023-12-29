import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/about"><li>about</li></Link>
        <Link to="/login"><li className="login">login</li></Link>
        </ul>
        <div className="center">
        <Link to="/product"><p>products</p></Link>
        <Link to="/signUp"><p>signup</p></Link>            
        </div>
    </>
  );
}

export default Header;
