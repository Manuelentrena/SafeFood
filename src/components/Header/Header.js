import React from "react";
import Logo from "../Logo/Logo";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1 className="header__title">SafeFood</h1>
    </header>
  );
};

export default Header;
