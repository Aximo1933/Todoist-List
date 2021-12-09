import React from "react";
import logo from "../assests/images/logo.jpg";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Todoist"></img>
        </div>
      </nav>
    </header>
  );
}

export default Header;
