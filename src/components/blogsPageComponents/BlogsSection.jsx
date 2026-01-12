"use client";
import React, { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";

/* ================= DATA ================= */

const categories = [
  "All",
  "Logistics",
  "Technology",
  "Fleet News",
  "Safety Tips",
];

const blogs = [
  {
    id: 1,
    title: "Efficiency in Last Mile Delivery",
    desc: "How modern technology is transforming last mile logistics across Pakistan.",
    date: "Jan 10, 2026",
    author: "Admin",
    category: "Logistics",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    id: 2,
    title: "Future of Electric Trucks",
    desc: "The shift towards sustainable freight and electric truck fleets.",
    date: "Jan 08, 2026",
    author: "Imran Khan",
    category: "Technology",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
  {
    id: 3,
    title: "Optimizing Fleet Routes",
    desc: "Reduce fuel costs and improve delivery times with smarter routing.",
    date: "Jan 05, 2026",
    author: "Sarah J.",
    category: "Fleet News",
    img: "https://images.unsplash.com/photo-1519003722824-192d992a6058?w=600&q=80",
  },
];

/* ================= COMPONENT ================= */

const BlogsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 mb-32">
      {/* ===== Heading ===== */}
      <div className="mb-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Latest <span className="text-yellow-500 text-center">Articles</span>
        </h2>
        <p className="text-slate-500 mt-3 max-w-2xl text-center">
          Practical insights, expert opinions, and industry updates from the
          world of trucking and logistics.
        </p>
      </div>

      {/* ===== Filters ===== */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeCategory === cat
                ? "bg-yellow-400 text-slate-900 shadow-lg"
                : "bg-white border border-slate-200 text-slate-700 hover:border-yellow-400 hover:text-slate-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== Blog Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl group hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-yellow-400 text-slate-900 text-xs font-black px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaUser /> {blog.author}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                {blog.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {blog.desc}
              </p>

              <button className="flex items-center gap-2 font-bold text-slate-900 hover:text-yellow-500 transition-all">
                Read More <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
