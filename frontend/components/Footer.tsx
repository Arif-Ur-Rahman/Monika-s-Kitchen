import { Cake, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cake className="h-8 w-8 text-rose-400" />
              <span className="text-2xl font-bold">
                Monika&apos;s <span className="text-rose-400">Cakes</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Delicious custom cakes made with love and the finest ingredients. 
              Order online for delivery or pickup.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-rose-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cakes" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Our Cakes
                </Link>
              </li>
              <li>
                <Link href="/flavors" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Flavors
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-rose-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>orders@monikascakes.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1" />
                <span>123 Sweet Street, Dessert City, DC 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive offers and new flavor announcements!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-r-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Monika&apos;s Cakes. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ and lots of sugar!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;