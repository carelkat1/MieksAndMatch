import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-light py-12">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://facebook.com/mieksandmatch"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Facebook"
        >
          <Facebook size={22} />
        </a>
        <a
          href="https://instagram.com/mieksandmatch"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
        <a
          href="https://wa.me/27782698244"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Mieks &amp; Match. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
