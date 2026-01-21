'use client';

import { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

const cakes = [
  {
    id: 1,
    name: 'Chocolate Heaven',
    category: 'Chocolate',
    price: 45,
    imageColor: 'bg-amber-900',
    description: 'Rich dark chocolate with ganache',
    popular: true,
  },
  {
    id: 2,
    name: 'Berry Bliss',
    category: 'Fruit',
    price: 55,
    imageColor: 'bg-pink-600',
    description: 'Fresh berries with vanilla cream',
    popular: true,
  },
  {
    id: 3,
    name: 'Red Velvet Dream',
    category: 'Classic',
    price: 50,
    imageColor: 'bg-red-700',
    description: 'Classic red velvet with cream cheese',
    popular: false,
  },
  {
    id: 4,
    name: 'Lemon Zest',
    category: 'Citrus',
    price: 42,
    imageColor: 'bg-yellow-400',
    description: 'Tangy lemon with sweet glaze',
    popular: true,
  },
  {
    id: 5,
    name: 'Caramel Delight',
    category: 'Caramel',
    price: 48,
    imageColor: 'bg-amber-600',
    description: 'Salted caramel with pecans',
    popular: false,
  },
  {
    id: 6,
    name: 'Vanilla Elegance',
    category: 'Classic',
    price: 40,
    imageColor: 'bg-rose-200',
    description: 'Pure vanilla bean flavor',
    popular: false,
  },
];

const CakeGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedCakes, setLikedCakes] = useState<number[]>([]);

  const categories = ['All', 'Chocolate', 'Fruit', 'Classic', 'Citrus', 'Caramel'];

  const filteredCakes = selectedCategory === 'All' 
    ? cakes 
    : cakes.filter(cake => cake.category === selectedCategory);

  const toggleLike = (id: number) => {
    setLikedCakes(prev => 
      prev.includes(id) ? prev.filter(cakeId => cakeId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-rose-500">Delicious</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide variety of handcrafted cakes, each made with premium ingredients and lots of love.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-rose-500 text-white shadow-lg'
                  : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="group card-hover bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Cake Image */}
              <div className={`relative h-64 ${cake.imageColor} flex items-center justify-center`}>
                <div className="text-6xl text-white/80">
                  {cake.category === 'Chocolate' && '🍫'}
                  {cake.category === 'Fruit' && '🍓'}
                  {cake.category === 'Classic' && '🎂'}
                  {cake.category === 'Citrus' && '🍋'}
                  {cake.category === 'Caramel' && '🍯'}
                </div>
                {cake.popular && (
                  <div className="absolute top-4 left-4 bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <button
                  onClick={() => toggleLike(cake.id)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30"
                >
                  <Heart
                    size={20}
                    className={likedCakes.includes(cake.id) ? 'fill-rose-500 text-rose-500' : 'text-white'}
                  />
                </button>
              </div>

              {/* Cake Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{cake.name}</h3>
                    <p className="text-gray-500">{cake.category} Cake</p>
                  </div>
                  <div className="text-2xl font-bold text-rose-600">
                    ${cake.price}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{cake.description}</p>
                
                <div className="flex justify-between items-center">
                  <button className="btn-primary flex-1 mr-3">
                    <ShoppingBag size={18} className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeGallery;