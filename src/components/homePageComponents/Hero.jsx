"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Premium Car Rentals",
    highlight: "For Every Journey",
    desc: "Discover comfort, performance, and style with our wide range of modern vehicles. Rent easily, drive confidently.",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Luxury & Comfort",
    highlight: "Drive With Style",
    desc: "Choose from luxury sedans, powerful SUVs, and premium cars designed to elevate your journey.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Fast & Easy Booking",
    highlight: "Anywhere, Anytime",
    desc: "Book your perfect ride in minutes with flexible pickup locations and transparent pricing.",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slider */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slides[index].image}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="absolute left-2 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer"
      >
        <ArrowLeft className="text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {slides[index].title}
              <span className="block text-yellow-400">
                {slides[index].highlight}
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
              {slides[index].desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <button className="rounded-2xl px-8 py-3 text-base font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition">
                Book a Car
              </button>
              <button className="rounded-2xl px-8 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white/10 transition">
                View Fleet
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="absolute right-2 z-20 bg-gray-100/25 hover:bg-gray-100/35 p-4 rounded-full cursor-pointer"
      >
        <ArrowRight className="text-white" />
      </div>
    </section>
  );
}
