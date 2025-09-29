// ContactUs.jsx

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-[#000000]/90  text-white py-16">
      <div
        className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 bg-gray-900 text-gray-300 bg-center bg-cover bg-fixed"
        style={{ backgroundImage: "url('Homeserv3.png')" }}
      >
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="text-gray-400">
            Have a question or want to work with us? Fill out the form or reach
            us directly.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300">
              <MapPin size={24} className="text-[#E43636] " />
              123 Rue de Marketing, Casablanca, Morocco
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Phone size={24} className="text-[#E43636] " />
              +212 603-148635{" "}
            </li>

            <li className="flex items-center gap-3 text-gray-300">
              <Mail size={24} className="text-[#E43636] " />
              jonnasfrontend@gmail.com
            </li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/guts___dgh?igsh=eTVvOGs2aHNkOGsz"
              className="hover:text-[#E43636] "
            >
              instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-white">
            Send Us a Message
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 rounded bg-gray-700 border border-gray-600 text-white resize-none h-32"
            />
            <button
              type="submit"
              className="bg-[#E43636]  hover:bg-orange-600 text-white font-semibold py-3 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
