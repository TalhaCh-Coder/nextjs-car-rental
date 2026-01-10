export default function FeaturedCars() {
  const cars = [
    {
      id: 1,
      name: "BMW M4 Series",
      price: "$150/day",
      img: "https://images.unsplash.com/photo-1630053562818-5a16d06eaa31?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Mercedes G-Wagon",
      price: "$250/day",
      img: "https://images.unsplash.com/photo-1723154955311-aef3ac135b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1lcmNlZGVzJTIwRy1XYWdvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Audi R8",
      price: "$200/day",
      img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVkaSUyMFI4fGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Most Popular Cars
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            Choose from our most popular cars for comfort, style, and
            performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Car Info */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {car.name}
              </h3>

              <div className="flex items-center justify-between mt-4">
                <span className="text-yellow-500 font-bold text-lg">
                  {car.price}
                </span>
                <button className="px-5 py-2 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
