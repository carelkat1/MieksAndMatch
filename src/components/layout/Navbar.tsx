"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary tracking-wide">
              MIEKS & MATCH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-secondary">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Log In
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
