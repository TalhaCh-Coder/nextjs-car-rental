'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTruckMoving, FaUsers, FaWarehouse } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
function SuccessStory() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const stats = [
    {
      number: "650+",
      label: "Successful Deliveries",
      icon: <FaTruckMoving className="text-4xl text-[#FFDF20]" />,
    },
    {
      number: "420+",
      label: "Satisfied Clients",
      icon: <FaUsers className="text-4xl text-[#FFDF20]" />,
    },
    {
      number: "25+",
      label: "Active Trucks",
      icon: <FaWarehouse className="text-4xl text-[#FFDF20]" />,
    },
    {
      number: "120+",
      label: "Routes Covered",
      icon: <FaRoute className="text-4xl text-[#FFDF20]" />,
    },
  ];

  return (
    <section className="px-4 py-14">
      
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl text-[#FFDF20] font-extrabold text-center mb-14 tracking-wide"
        data-aos="fade-up">
        Our Growth & Performance
      </h2>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            className="
              group
              backdrop-blur-xl
              bg-[#1D293D]
              p-7
              rounded-2xl
              shadow-lg
              border border-white/15
              transition-all duration-300
            "
          >
            <div className="flex flex-col items-center gap-3">
              
              {/* Icon */}
              <div className="p-4 rounded-full transition-all duration-300">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-4xl font-extrabold text-[#FFDF20]">
                {item.number}
              </h3>

              {/* Label */}
              <p className="text-sm text-white  font-medium tracking-wide">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default SuccessStory;
