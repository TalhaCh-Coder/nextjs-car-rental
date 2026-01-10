"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Business Traveler",
      comment:
        "The car was in pristine condition and the pickup process was incredibly smooth. Highly recommended for professionals.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Tourist",
      comment:
        "Best prices I found in the city. The SUV we rented for our family trip was perfect and very clean.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Local Client",
      comment:
        "I've used DriveEase multiple times. Their 24/7 support actually works! Had a minor query at 2 AM and they picked up.",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            What Our Clients Say
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-700 italic mb-6">"{r.comment}"</p>

              {/* Reviewer */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-sm"
                />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{r.name}</h5>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
