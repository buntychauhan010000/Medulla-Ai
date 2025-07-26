import React from "react";
import { navlink } from "../Helper";

function NavItem({ setIsOpen }) {
  return (
    <>
      {navlink.map((item, index) => (
        <li
          key={index}
          className="hover:scale-105 text-lg md:text-xl font-semibold transition-all duration-300 hover:text-sky-900"
        >
          <a
            href={item.link}
            onClick={() => setIsOpen && setIsOpen(false)} // Mobile menu close karega
          >
            {item.text}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavItem;
