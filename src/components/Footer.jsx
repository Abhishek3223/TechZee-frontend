import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./footer.css";
import Card from "./Card";
const Footer = () => {
  return (
    <div>
      <footer className="py-3 my-4  text-secondary-emphasis">
        <Card/>
        <div className="MarqueeSection">
          <div className="marquee">
            <Marquee speed={50}>TZEE BY TECH-ZEE/</Marquee>
          </div>
        </div>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link
              to="/"
              className="text-secondary-emphasis nav-link px-2 text-muted"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2023 TZEE, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;