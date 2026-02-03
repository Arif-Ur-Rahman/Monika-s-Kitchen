'use client';

import { ShoppingCart, Calendar, Cake, Truck, Clock, Shield, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Browse & Select',
    description: 'Choose from our wide variety of cakes or customize your own',
    icon: ShoppingCart,
    color: 'bg-blue-500',
    time: '5 minutes',
    details: 'Explore 50+ designs or create your own'
  },
  {
    id: 2,
    title: 'Schedule Delivery',
    description: 'Pick your preferred delivery date and time',
    icon: Calendar,
    color: 'bg-green-500',
    time: '2 minutes',
    details: 'Flexible scheduling available'
  },
  {
    id: 3,
    title: 'We Bake Fresh',
    description: 'Monika personally bakes your cake using fresh ingredients',
    icon: Cake,
    color: 'bg-amber-500',
    time: '24-48 hours',
    details: 'Made fresh after you order'
  },
  {
    id: 4,
    title: 'Safe Delivery',
    description: 'Your cake arrives fresh and perfectly presented',
    icon: Truck,
    color: 'bg-purple-500',
    time: 'Within window',
    details: 'Carefully packaged & delivered'
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
  {
    icon: CheckCircle,
    title: 'Custom Designs',
    description: 'Personalized cakes for any occasion',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-2xl mb-6">
            <Cake className="h-8 w-8 text-rose-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-rose-500">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your perfect cake is as easy as 1-2-3-4. We handle everything from baking to delivery.
          </p>
        </div>

        {/* Steps with visual timeline */}
        <div className="relative mb-20">
          {/* Timeline line - visible on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-amber-500 to-purple-500 -translate-y-1/2 z-0"></div>
          
          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="group relative"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-white rounded-full shadow-xl flex items-center justify-center z-20">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Step card */}
                <div className="bg-white rounded-2xl p-8 pt-12 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Details badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">{step.time}</span>
                    </div>
                    
                    <p className="text-sm text-gray-500">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Customization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Features */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-rose-500">Monika&apos;s Cakes</span>?
            </h3>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="flex items-start space-x-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm group hover:bg-white transition-all duration-300"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-rose-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Monika's quote */}
            <div className="mt-8 p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-rose-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-white font-bold">M</span>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-3 text-lg">
                    &ldquo;Each cake is baked with love and attention to detail, just like I would make for my own family.&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">Monika</p>
                    <p className="text-sm text-gray-600">Master Baker & Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Customization */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Customization <span className="text-rose-500">Options</span>
            </h3>
            
            <div className="space-y-6">
              {/* Size Options */}
              <div className="p-6 bg-white/80 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-amber-500 rounded-full mr-3"></span>
                  Size Options
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { size: '6"', serves: '4-6 people', price: '$35+' },
                    { size: '8"', serves: '8-10 people', price: '$45+' },
                    { size: '10"', serves: '12-15 people', price: '$55+' },
                    { size: '12"', serves: '20-25 people', price: '$75+' },
                  ].map((option) => (
                    <div 
                      key={option.size} 
                      className="p-4 bg-white rounded-xl border border-amber-100 hover:border-amber-300 transition-colors"
                    >
                      <div className="text-2xl font-bold text-amber-700">{option.size}</div>
                      <div className="text-sm text-gray-600">{option.serves}</div>
                      <div className="text-sm font-semibold text-gray-900 mt-2">{option.price}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Special Requests */}
              <div className="p-6 bg-white/80 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                  Special Requests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Dietary Restrictions', 'Custom Messages', 'Special Decorations', 'Allergy-Friendly', 'Photo Cakes', '3D Designs'].map((request) => (
                    <span 
                      key={request} 
                      className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                    >
                      {request}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Delivery Notes */}
              <div className="p-6 bg-white/80 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
                  Delivery Notes
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    </div>
                    <span>Free delivery within 10 miles</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    </div>
                    <span>Same-day delivery available for orders before 10 AM</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    </div>
                    <span>Contact-free delivery option available</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full mt-8 text-lg">
              Start Your Custom Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;