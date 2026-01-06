import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "All Services", path: "/services" },
        { name: "Academic Services", path: "/services/academic" },
        { name: "IT Services", path: "/services/it" },
        { name: "Global HR Services", path: "/services/hr" },
      ],
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-heading">
              Vision<span className="text-rose">Spirit</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors duration-200",
                        isActive(link.path) ? "text-rose" : "text-body hover:text-rose"
                      )}
                    >
                      {link.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-body" />
                    
                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-0 pt-2 transition-all duration-200",
                        servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      )}
                    >
                      <div className="bg-background rounded-lg shadow-lg border border-blush py-2 min-w-[200px]">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.path}
                            to={sublink.path}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors duration-200",
                              isActive(sublink.path)
                                ? "text-rose bg-secondary"
                                : "text-body hover:text-rose hover:bg-secondary"
                            )}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      isActive(link.path) ? "text-rose" : "text-body hover:text-rose"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="hero" size="default">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-heading" />
            ) : (
              <Menu className="w-6 h-6 text-heading" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-20 left-0 right-0 bg-background border-t border-blush transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <div className="space-y-2">
                  <span className="block text-sm font-medium text-heading">
                    {link.name}
                  </span>
                  <div className="pl-4 space-y-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block text-sm transition-colors duration-200",
                          isActive(sublink.path)
                            ? "text-rose"
                            : "text-body hover:text-rose"
                        )}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-sm font-medium transition-colors duration-200",
                    isActive(link.path) ? "text-rose" : "text-body hover:text-rose"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="hero" className="w-full mt-4">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
