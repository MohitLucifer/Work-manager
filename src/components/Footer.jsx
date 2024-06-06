"use client";
import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./SocialLinks.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className=" h-40 bg-blue-600 mt-auto">
      <div className="flex p-5 justify-around">
        <div className="w-3/5 text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome to work manager</h1>
          <p>
            Welcome to Work Manager, your ultimate solution for organizing and
            managing your work efficiently. Work Manager provides the tools you
            need to streamline your workflow, track tasks, and collaborate
            seamlessly with your colleagues.
          </p>
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <h1>Important Links</h1>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MohitLucifer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/mohitkumar00228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mohit_kumar_real/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
