import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/ezeqduarte" target={"_blank"}>
        <GitHubIcon fontSize={"large"}></GitHubIcon>
      </a>
      <a href="https://www.linkedin.com/in/ezeqduarte/" target={"_blank"}>
        <LinkedInIcon fontSize={"large"}></LinkedInIcon>
      </a>
      <a href="https://www.instagram.com/ezeqduarte/" target={"_blank"}>
        <InstagramIcon fontSize={"large"}></InstagramIcon>
      </a>
    </div>
  );
}
