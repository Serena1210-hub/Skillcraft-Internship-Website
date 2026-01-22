import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-all duration-300
     ${isActive ? "text-[#ffc916]" : "text-white/80 hover:text-white"}
     hover:after:w-full after:block after:h-[1px] after:bg-[#ffc916]
     after:w-0 after:transition-all after:duration-300`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo1.png"
            alt="SkillCraft Logo"
            className="h-24 w-24 object-contain"
          />
          <span className="font-semibold tracking-widest text-[#ffc916]">
            SKILLCRAFT
          </span>
        </Link>

        {/* Center links */}
        <div className="hidden md:flex space-x-10">
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/application" className={navLinkClass}>
            Application
          </NavLink>
          <NavLink to="/assessment" className={navLinkClass}>
            Assessment
          </NavLink>
          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-5">
          <button className="text-white/70 hover:text-[#ffc916] transition">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <button className="text-white/70 hover:text-[#ffc916] transition">
            <UserIcon className="h-5 w-5" />
          </button>

          {/* Mobile menu */}
          <button
            className="md:hidden text-[#ffc916]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 px-6 py-6 space-y-4">
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/application" className={navLinkClass}>
            Application
          </NavLink>
          <NavLink to="/assessment" className={navLinkClass}>
            Assessment
          </NavLink>
          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>
        </div>
      )}
    </nav>
  );
}
