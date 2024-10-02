import React, { useEffect } from "react";
import "./home.css";

import logo from "../../assets/logo.webp";

function Home() {
  useEffect(() => {
    document.title = "Home - TMCMotion";
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>TMC Motion - Coming Soon</p>
      </header>
    </div>
  );
}

export default Home;
