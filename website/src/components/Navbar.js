import React from "react";
import './Landing.css';

const Navbar = () => {
  return (
    <nav className="landing-nav">
      <a href="/">Champion Changelog</a>
      <a
        className="landing-nav-end"
        href="https://na.leagueoflegends.com/en/news/game-updates/patch/patch-822-notes"
        style={{ zIndex: 200 }}
      >
        Read Latest Patch Notes
      </a>
    </nav>
  );
};

export default Navbar;
