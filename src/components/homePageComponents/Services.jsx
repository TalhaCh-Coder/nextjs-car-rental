"use client";
import React from "react";
import { FaShieldAlt, FaClock, FaTag, FaHeadset } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Fully Insured",
      desc: "Drive with absolute peace of mind; all our rentals come with comprehensive insurance coverage.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Roadside Assistance",
      desc: "No matter where you are or what time it is, our support team is just a call away.",
    },
    {
      icon: <FaTag />,
      title: "No Hidden Charges",
      desc: "What you see is what you pay. We believe in 100% transparency with our pricing.",
    },
    {
      icon: <FaHeadset />,
      title: "Free Cancellation",
      desc: "Plans changed? No problem. Cancel your booking for free up to 24 hours before.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our <span className="text-yellow-400">Premium Services</span>
          </h2>
          <p className="text-slate-600 mt-4">
            We provide the best car rental experience with a focus on safety,
            luxury, and customer satisfaction.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl text-yellow-400 mb-6 bg-yellow-50 w-16 h-16 flex items-center justify-center rounded-xl transition-all group-hover:bg-yellow-400 group-hover:text-white">
                {f.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                {f.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
