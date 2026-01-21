'use client';

import { ShoppingCart, Calendar, Cake, Truck, Clock, Shield } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Browse & Select',
    description: 'Choose from our wide variety of cakes or customize your own',
    icon: ShoppingCart,
    color: 'bg-blue-500',
    time: '5 minutes',
  },
  {
    id: 2,
    title: 'Schedule Delivery',
    description: 'Pick your preferred delivery date and time',
    icon: Calendar,
    color: 'bg-green-500',
    time: '2 minutes',
  },
  {
    id: 3,
    title: 'We Bake Fresh',
    description: 'Monika personally bakes your cake using fresh ingredients',
    icon: Cake,
    color: 'bg-amber-500',
    time: '24-48 hours',
  },
  {
    id: 4,
    title: 'Safe Delivery',
    description: 'Your cake arrives fresh and perfectly presented',
    icon: Truck,
    color: 'bg-purple-500',
    time: 'Within window',
  },
];

const features = [
  {
    icon: Clock,
    title: '24/7 Ordering',
    description: 'Place orders anytime, day or night',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction or your money back',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-rose-500">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your perfect cake is as easy as 1-2-3-4. We handle everything from baking to delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-amber-500 to-purple-500 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl mx-auto flex items-center justify-center shadow-xl`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-rose-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    <span className="text-lg font-bold text-gray-900">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">{step.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-rose-500">Monika&apos;s Cakes</span>?
            </h3>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <feature.icon className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white/80 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-700 italic mb-3">
                &ldquo;Each cake is baked with love and attention to detail, just like I would make for my own family.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-bold text-gray-900">Monika</p>
                  <p className="text-sm text-gray-600">Master Baker & Owner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Customization <span className="text-rose-500">Options</span>
            </h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/80 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Size Options</h4>
                <div className="flex flex-wrap gap-2">
                  {['6" (4-6 people)', '8" (8-10 people)', '10" (12-15 people)', '12" (20-25 people)'].map((size) => (
                    <span key={size} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-white/80 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Special Requests</h4>
                <div className="flex flex-wrap gap-2">
                  {['Dietary Restrictions', 'Custom Messages', 'Special Decorations', 'Allergy-Friendly'].map((request) => (
                    <span key={request} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {request}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-white/80 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Delivery Notes</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                    <span>Free delivery within 10 miles</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                    <span>Same-day delivery available for orders before 10 AM</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                    <span>Contact-free delivery option</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <button className="btn-primary w-full mt-8">
              Start Your Custom Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;