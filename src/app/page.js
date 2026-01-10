import Hero from "@/components/homePageComponents/Hero";
import FeaturedCars from "@/components/homePageComponents/FeaturedCars";
import Services from "@/components/homePageComponents/Services";
import Testimonials from "@/components/homePageComponents/Testimonials";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <FeaturedCars />
      <Services />
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Ready to hit the road? Book your dream car today!
          </h2>
          <button className="mt-8 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl active:scale-95">
            Check All Cars
          </button>
        </div>
      </section>
    </div>
  );
}
