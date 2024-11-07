import { Link } from "react-router-dom";
import icon from "../../assets/icon/Group.png";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>

      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Portfolio</Link>
      </li>
      <li>
        <Link>Clients</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  max-w-7xl mx-auto sticky -mb-20">
        <div className="navbar-start">
          <div
            className="flex items-center gap-2
          "
          >
            <img className="" src={icon} alt="" />
            <a className=" text-2xl font-bold text-white">Restaurant</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* Button visible on larger screens */}
          <div className="hidden lg:block">
            <a className="py-2 px-4 bg-[#febf00] uppercase font-bold">
              Book a Table
            </a>
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className="dropdown lg:hidden">
            <div
              role="button"
              tabIndex={0}
              className="btn btn-ghost text-white"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Dropdown menu */}
            {menuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#c52a1e] rounded-box z-30 mt-3 w-52 p-2 shadow text-white -ml-36"
              >
                {navItems}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
