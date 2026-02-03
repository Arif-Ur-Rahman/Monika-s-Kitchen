'use client';

import { ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentCake, setCurrentCake] = useState(0);
  const cakes = [
    'Chocolate Truffle',
    'Red Velvet',
    'Strawberry Delight',
    'Vanilla Dream'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCake((prev) => (prev + 1) % cakes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cakes.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">Rated 4.9/5 by 500+ customers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Delicious Cakes Made with{' '}
              <span className="text-rose-500">Love & Passion</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Monika creates exquisite custom cakes for every occasion. 
              Fresh ingredients, stunning designs, and unforgettable flavors 
              delivered right to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center">
                Order Now <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 font-semibold py-3 px-6 rounded-full transition-all duration-300">
                View Our Collection
              </button>
            </div>
            
            {/* Animated Cake Text */}
            <div className="p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-700 mb-2">Today&apos;s Special:</p>
              <div className="h-12 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentCake * 3}rem)` }}
                >
                  {cakes.map((cake, index) => (
                    <div key={cake} className="h-12">
                      <h3 className="text-2xl font-bold text-rose-600">
                        {cake} Cake
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for cake image */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-amber-200 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🎂</div>
                  <h3 className="text-3xl font-bold mb-2">Beautiful Cake Display</h3>
                  <p className="text-xl">Customer&apos;s favorite design</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-300 rounded-full blur-xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-rose-300 rounded-full blur-xl opacity-50"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                <div className="text-2xl font-bold text-rose-600">50+</div>
                <div className="text-gray-600">Cake Designs</div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                <div className="text-2xl font-bold text-rose-600">24/7</div>
                <div className="text-gray-600">Order Support</div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                <div className="text-2xl font-bold text-rose-600">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;