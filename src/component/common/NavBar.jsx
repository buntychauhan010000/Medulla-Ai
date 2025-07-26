import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import NavItem from "./items/NavItem";
import PrimaryButton from "./PrimaryButton";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Body scroll lock sirf mobile menu open par
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-50" />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-10">
            <NavItem setIsOpen={setIsOpen} />
          </ul>

          {/* Buttons + Mobile Toggle */}
          <div className="flex gap-10">
            <div className="hidden md:flex items-center gap-6">
              <button className="text-sky-900 font-medium hover:text-sky-700 transition">
                Login
              </button>
              <PrimaryButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-sky-900 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white h-dvh overflow-y-auto shadow-lg">
          <ul className="flex flex-col gap-6 p-6">
            <NavItem setIsOpen={setIsOpen} />
          </ul>
          <div className="flex flex-col gap-4 px-6 pb-6">
            <button
              className="text-sky-900 font-medium hover:text-sky-700 transition"
              onClick={() => setIsOpen(false)} // Close on click
            >
              Login
            </button>
            <PrimaryButton />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
