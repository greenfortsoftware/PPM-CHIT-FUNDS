import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Policies", to: "/policies" },
    { label: "Services", to: "/services" },
    // { label: "Claims", to: "/claims" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-t-4 border-blue-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="/images/PPM-Logo.jpeg"
                alt="Company Logo"
                title="Shengai PPM Chit Funds Pvt Ltd"
                className="h-12 w-auto sm:h-14 lg:h-16 object-contain"
              />
            </Link>

            <div className="leading-tight">
              <h1 className="!text-[#1B2D6B] !font-bold mb-0 uppercase !text-xs sm:!text-sm md:!text-base lg:!text-[17px] xl:!text-lg">
                Shengai PPM Chit Funds Pvt Ltd
              </h1>

              <p className="hidden sm:block text-[11px] lg:text-[13px] mb-0 text-gray-600 font-medium">
                A Tradition of Trust, A Future of Growth
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `group relative text-decoration-none font-semibold uppercase text-sm tracking-wide hover:text-blue-900 ${
                        isActive ? "text-blue-900" : "text-black"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        <span
                          className={`
                            absolute left-0 -bottom-3
                            h-1 bg-yellow-400 rounded
                            transition-all duration-300
                            group-hover:w-full
                            ${isActive ? "w-full" : "w-0"}
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-blue-900" />
            ) : (
              <Menu size={28} className="text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 pt-2 border-t">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-semibold uppercase hover:text-blue-900 no-underline ${
                      isActive ? "text-blue-900" : "text-gray-700"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
