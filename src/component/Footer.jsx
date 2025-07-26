import React from "react";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import logoicon from "../assets/img/logoicon.png";

function Footer() {
  return (
    <footer
      className="bg-yellow-50 border-t border-slate-100 text-slate-500 text-sm"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-0">
        {/* Left: Logo and Text */}
        <div
          className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img src={logoicon} alt="Logo" className="w-8  md:w-10" />
          <span className="text-sm sm:text-base mt-1 sm:mt-0">
            © 2025 medullaAI. All rights reserved.
          </span>
        </div>

        {/* Right: Socials & Links */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 text-sm sm:text-base"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          {/* Icons */}
          <div
            className="flex items-center gap-4 text-xl"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin className="hover:text-sky-900 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram className="hover:text-sky-900 transition" />
            </a>
            <a href="mailto:support@medullaai.com" aria-label="Email">
              <FiMail className="hover:text-sky-900 transition" />
            </a>
          </div>

          {/* Divider (visible on small screens only) */}
          <div className="hidden sm:block w-px h-4 bg-slate-300 mx-2" />

          {/* Links */}
          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="#" className="hover:text-sky-900 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-sky-900 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
