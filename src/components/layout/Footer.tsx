import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const columns = {
    company: {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    services: {
      title: "Services",
      links: [
        { label: "Au Pair", href: "/services/au-pair" },
        { label: "Chauffeur", href: "/services/chauffeur" },
        { label: "House & Pet Sitters", href: "/services/house-pet-sitters" },
        { label: "Tutors", href: "/services/tutors" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { label: "Help Centre", href: "/help" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    connect: {
      title: "Connect",
      links: [
        {
          label: "Facebook",
          href: "https://facebook.com/mieksandmatch",
          icon: Facebook,
        },
        {
          label: "Instagram",
          href: "https://instagram.com/mieksandmatch",
          icon: Instagram,
        },
        {
          label: "WhatsApp",
          href: "https://wa.me/27123456789",
          icon: MessageCircle,
        },
      ],
    },
  };

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-6 text-white">
              {columns.company.title}
            </h3>
            <ul className="space-y-3">
              {columns.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-6 text-white">
              {columns.services.title}
            </h3>
            <ul className="space-y-3">
              {columns.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-6 text-white">
              {columns.support.title}
            </h3>
            <ul className="space-y-3">
              {columns.support.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-6 text-white">
              {columns.connect.title}
            </h3>
            <div className="flex gap-4">
              {columns.connect.links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mieks & Match. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://facebook.com/mieksandmatch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/mieksandmatch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/27123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
