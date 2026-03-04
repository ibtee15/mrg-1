import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const services = [
  { name: "Solution Delivery",      href: "/services/solution-delivery" },
  { name: "Talent Solutions",       href: "/services/talent-solutions" },
  { name: "Offshore Solutions",     href: "/services/offshore-solutions" },
  { name: "Consulting Services",    href: "/services/consulting" },
  { name: "Data Analytics",         href: "/services/data-analytics" },
  { name: "SAP Services",           href: "/services/sap" },
  { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
  { name: "AI & Automation",        href: "/services/ai-automation" },
];

const navLinks = [
  { name: "Home",       href: "/" },
  { name: "About",      href: "/about" },
  { name: "Services",   href: "/services", children: services },
  { name: "Industries", href: "/industries" },
  { name: "Careers",    href: "/careers" },
  { name: "Contact",    href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between h-16 lg:h-20">

        {/* Logo — always the normal dark logo on white */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Meta Resources Group" className="h-9 lg:h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.children && setServicesOpen(true)}
              onMouseLeave={() => link.children && setServicesOpen(false)}
            >
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1 ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.name}
                {link.children && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                )}
              </Link>

              {/* Dropdown */}
              {link.children && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-strong border border-gray-100 py-2 mt-1"
                    >
                      {link.children.map((child, i) => (
                        <motion.div
                          key={child.href}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                        >
                          <Link
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="btn-shimmer ml-4 px-5 py-2.5 text-sm font-bold rounded-md gradient-accent text-white hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => !link.children && setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold rounded-md ${
                      isActive(link.href) ? "text-accent bg-gray-50" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="pl-6 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center mt-4 px-5 py-3 text-sm font-bold rounded-md gradient-accent text-white"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
