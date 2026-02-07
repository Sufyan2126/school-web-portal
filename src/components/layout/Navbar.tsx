import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onApplyClick: () => void;
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Toppers", path: "/toppers" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = ({ onApplyClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-foreground leading-none">
                Central Public
              </span>
              <span className="text-xs md:text-sm font-medium text-muted-foreground">
                High School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  location.pathname === link.path
                    ? "bg-sky-100 text-sky-900 shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Apply Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={onApplyClick}
              className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold animate-pulse-scale rounded-full px-6"
            >
              Apply Now
            </Button>
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 bg-background/50 p-2 rounded-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-full text-sm font-medium transition-colors text-center",
                  location.pathname === link.path
                    ? "bg-sky-100 text-sky-900"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                onApplyClick();
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
