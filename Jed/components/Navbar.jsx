"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed h-20 w-full flex items-center justify-evenly transition-all duration-300 ${isScrolled ? "bg-black text-white" : "text-black"}`}
    >
      <div className="flex items-center gap-90">
        <div className="text-xl font-bold tracking-wide">
          Jed <br />
          <span className="italic">Consultancy</span>
        </div>
        <div className="flex items-center justify-between gap-8 tracking-wide font-extralight">
          <div>Home</div>
          <div>Courses</div>
          <div>Visa Services</div>
          <div>About Us</div>
          <div>FAQ</div>
        </div>
        <div
          className={`flex items-center justify-center shadow-2xl outline p-2.5 rounded-full ${isScrolled ? "hover:bg-gray-700 bg-gray-800" : "hover:bg-slate-500"}`}
        >
          <button className="cursor-pointer">Contact Us</button>
          <span className="ml-2 text-lg">
            <i className="ri-arrow-right-up-fill"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
