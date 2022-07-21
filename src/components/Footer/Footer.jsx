import React from "react";
import "./index.scss";

const Footer = () => (
  <footer className="footer">
    <p>
      {" "}
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a className="text-dark" href="https://github.com/zhuima">
        zhuima
      </a>
    </p>
  </footer>
);

export default Footer;
