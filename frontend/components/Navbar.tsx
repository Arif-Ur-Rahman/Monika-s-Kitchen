'use client';

import { useState } from 'react';
import { Menu, X, Cake, ShoppingCart, Phone } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Cakes', href: '/cakes' },
    { name: 'Flavors', href: '/flavors' },
    { name: 'Order', href: '/order' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Cake className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-bold text-gray-800">
              Monika&apos;s <span className="text-rose-500">Cakes</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary flex items-center space-x-2">
              <Phone size={18} />
              <span>Order Now</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <ShoppingCart size={18} />
              <span>Cart (0)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-rose-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-rose-500 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button className="btn-secondary w-full">
                  Order Now
                </button>
                <button className="btn-primary w-full">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;