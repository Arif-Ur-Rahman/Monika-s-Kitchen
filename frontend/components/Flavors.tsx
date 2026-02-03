"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const flavors = [
  {
    id: 1,
    name: "Chocolate Lovers",
    description: "Rich, decadent chocolate in various intensities",
    options: [
      "Dark Chocolate",
      "Milk Chocolate",
      "White Chocolate",
      "Chocolate Hazelnut",
    ],
    color: "bg-amber-900",
  },
  {
    id: 2,
    name: "Fruit Delights",
    description: "Fresh fruit-infused cakes bursting with natural flavors",
    options: ["Strawberry", "Mango", "Mixed Berries", "Pineapple"],
    color: "bg-pink-500",
  },
  {
    id: 3,
    name: "Classic Favorites",
    description: "Timeless flavors that never go out of style",
    options: ["Vanilla Bean", "Red Velvet", "Carrot Cake", "Coffee"],
    color: "bg-rose-600",
  },
  {
    id: 4,
    name: "Specialty Flavors",
    description: "Unique and exotic flavor combinations",
    options: [
      "Salted Caramel",
      "Matcha Green Tea",
      "Lemon Lavender",
      "Tiramisu",
    ],
    color: "bg-purple-600",
  },
];

const Flavors = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(1);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-rose-500">Flavor</span> Universe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each flavor is carefully crafted using premium ingredients and
            traditional recipes with a modern twist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Flavor Selection */}
          <div className="space-y-6">
            {flavors.map((flavor) => (
              <div
                key={flavor.id}
                onClick={() => setSelectedFlavor(flavor.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedFlavor === flavor.id
                    ? "bg-white shadow-2xl border-2 border-rose-100"
                    : "bg-white/50 hover:bg-white/80 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`w-4 h-4 rounded-full ${flavor.color}`}
                      ></div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {flavor.name}
                      </h3>
                      {selectedFlavor === flavor.id && (
                        <Check className="text-green-500" size={20} />
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{flavor.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {flavor.options.map((option) => (
                        <span
                          key={option}
                          className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm font-medium"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flavor Details */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div
                className={`h-64 rounded-2xl ${flavors.find((f) => f.id === selectedFlavor)?.color || "bg-amber-900"} mb-6 flex items-center justify-center`}
              >
                <div className="text-6xl text-white/90">
                  {selectedFlavor === 1 && "🍫"}
                  {selectedFlavor === 2 && "🍓"}
                  {selectedFlavor === 3 && "🎂"}
                  {selectedFlavor === 4 && "✨"}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {flavors.find((f) => f.id === selectedFlavor)?.name} Details
              </h3>

              <p className="text-gray-600 mb-6">
                Our{" "}
                {flavors
                  .find((f) => f.id === selectedFlavor)
                  ?.name.toLowerCase()}{" "}
                collection features the finest ingredients sourced from trusted
                suppliers. Each cake is made fresh to order, ensuring maximum
                flavor and quality.
              </p>

              <div className="bg-rose-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  Flavor Profile:
                </h4>
                <ul className="space-y-2">
                  {flavors
                    .find((f) => f.id === selectedFlavor)
                    ?.options.map((option, index) => (
                      <li key={option} className="flex items-center">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">
                          {option} - Perfect for{" "}
                          {
                            [
                              "special occasions",
                              "summer parties",
                              "classic celebrations",
                              "unique experiences",
                            ][index]
                          }
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full mt-8">
                Order {flavors.find((f) => f.id === selectedFlavor)?.name} Cake
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-200 rounded-full blur-xl opacity-60 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-200 rounded-full blur-xl opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavors;
