// Footer.jsx
import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900/20 text-gray-300 pt-12 bg-fixed bg-center bg-cover"
      id="devis"
    >
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand & Trust */}
        <div className="space-y-4">
          <img src="/public/houseLogo.png" alt="Logo" className="h-12" />
          <p className="text-gray-400">
            We are committed to delivering the best digital marketing solutions,
            building trust, and helping businesses grow.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/hamzaimzri21"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <Facebook size={24} />
            </a>

            {/*    <a
              href="https://www.linkedin.com/company/imzri-consulting/"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <Linkedin size={24} />
            </a> */}
            <a
              href="https://www.instagram.com/imzriconsulting/"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="home"
                smooth
                duration={500}
                className="hover:text-white cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth
                duration={500}
                className="hover:text-white cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth
                duration={500}
                className="hover:text-white cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth
                duration={500}
                className="hover:text-white cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="devis"
                smooth
                duration={500}
                className="hover:text-white cursor-pointer"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={20} /> +212 603-148635
            </li>

            <li className="flex items-center gap-2">
              <Mail size={20} /> jonnasfrontend@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter / Trust Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Stay In Touch
          </h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates, offers, and digital marketing tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded bg-gray-800 text-white border border-gray-700 flex-1"
            />
            <button
              type="submit"
              className="bg-[#E43636]  hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
  );
}
