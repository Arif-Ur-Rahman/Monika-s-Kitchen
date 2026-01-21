'use client';

import { Phone, Cake, Gift, Clock } from 'lucide-react';
import { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Taste the <span className="text-yellow-300">Sweetness</span>?
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Order your dream cake today or join our sweet community for exclusive offers and updates!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call to Order</h4>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Order Hours</h4>
                  <p className="opacity-90">24/7 Online • 8AM-8PM Phone</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">First Order Bonus</h4>
                  <p className="opacity-90">Get 15% off your first cake order!</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-rose-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Order Online Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300">
                View Full Menu
              </button>
            </div>
          </div>

          {/* Right Content - Newsletter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <Cake className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Sweet Newsletter</h3>
            </div>
            
            <p className="mb-6 opacity-90">
              Subscribe to get exclusive recipes, special offers, and be the first to know about new flavors!
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-rose-500" defaultChecked />
                  <span className="text-sm">Get weekly cake inspiration</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-rose-500" defaultChecked />
                  <span className="text-sm">Receive exclusive offers</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-300 hover:bg-yellow-400 text-rose-700 font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {subscribed ? 'Subscribed! 🎉' : 'Join Sweet Community'}
              </button>
            </form>
            
            {subscribed && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-xl text-center">
                🎉 Welcome to Monika&apos;s sweet family! Check your email for a special welcome gift.
              </div>
            )}
            
            <p className="text-sm opacity-75 mt-6 text-center">
              No spam ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Quick Order Bar */}
        <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">🎂</div>
              <h4 className="font-bold mb-2">Custom Cakes</h4>
              <p className="text-sm opacity-90">Design your dream cake</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">🍰</div>
              <h4 className="font-bold mb-2">Ready to Order</h4>
              <p className="text-sm opacity-90">Popular cakes available now</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">🎁</div>
              <h4 className="font-bold mb-2">Gift Packages</h4>
              <p className="text-sm opacity-90">Perfect for celebrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;