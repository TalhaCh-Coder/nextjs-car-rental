'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutHeader() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src="https://i.pinimg.com/1200x/db/0b/42/db0b429f21c75a336bed34315889b806.jpg"
        alt="Truck Rental"
        className="absolute  h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 opacity-55 bg-[#1D293D]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-center">

        <span
          data-aos="fade-down"
          className="inline-block mx-auto mb-6 px-5 py-2 text-sm font-semibold tracking-wide rounded-full bg-[#FFDF20]/15 text-[#FFDF20]"
        >
          About Our Company
        </span>

        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Driving Reliability in
          <span className="block text-[#FFDF20] mt-3">
            Truck Rental Solutions
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
        >
          We provide professional, safe, and cost-effective truck rental services
          designed to keep your business moving forward — on time and without
          compromise.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="450"
          className="mt-12 flex justify-center"
        >
          <span className="h-1 w-28 rounded-full bg-[#FFDF20]"></span>
        </div>

      </div>
    </section>
  );
}

export default AboutHeader;
