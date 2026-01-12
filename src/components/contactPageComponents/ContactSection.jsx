import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg text-white text-xl">
                  <FaPhoneAlt />
                </div>
                <span className="text-slate-700 font-semibold">
                  +92 (300) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg text-white text-xl">
                  <FaEnvelope />
                </div>
                <span className="text-slate-700 font-semibold">
                  support@truckease.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg text-white text-xl">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-slate-700 font-semibold">
                  I-9 Industrial Area, Islamabad
                </span>
              </div>
            </div>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
            </a>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
              ></textarea>
              <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
