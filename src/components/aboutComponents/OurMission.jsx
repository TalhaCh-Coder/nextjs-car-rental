'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurMission() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D293D]">
            Mission & Vision
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Driven by purpose, guided by excellence, and focused on delivering
            reliable transportation solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission Card */}
          <div
            data-aos="fade-right"
            className="group bg-[#1D293D] text-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
          >
            {/* Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-[#FFDF20]"></div>

            <h3 className="text-2xl font-bold mb-4 text-[#FFDF20]">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to provide safe, dependable, and cost-effective
              truck rental services that empower businesses and individuals to
              move goods efficiently while maintaining the highest standards
              of service and reliability.
            </p>
          </div>

          {/* Vision Card */}
          <div
            data-aos="fade-left"
            className="group bg-[#F8F9FB] p-10 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden"
          >
            {/* Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-[#FFDF20]"></div>

            <h3 className="text-2xl font-bold mb-4 text-[#1D293D]">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to become a leading truck rental brand known for
              innovation, customer trust, and operational excellence — shaping
              the future of transportation through reliability and technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurMission;
