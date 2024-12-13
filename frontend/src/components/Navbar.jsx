import { useState } from "react";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/plants", label: "Plants" },
  { to: "/identify", label: "Identify" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/explore", label: "Explore" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">
            A
          </div>
          <div className="ml-3">
            <p className="text-lg font-semibold">Anvaya</p>
            <p className="text-sm text-gray-400">3D virtual garden</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 underline"
                    : "hover:text-orange-400 transition"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button  className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            Login
          </button>
          <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-400">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isNavOpen ? <RiCloseLine /> : <RiMenuFill />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col gap-4 px-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 underline"
                      : "hover:text-orange-400 transition"
                  }
                  onClick={toggleNav}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-4 flex flex-col gap-4">
            <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
              Login
            </button>
            <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-400">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
