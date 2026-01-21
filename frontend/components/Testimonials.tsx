'use client';

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Planner',
    content: 'Monika\'s cakes are absolutely stunning! The red velvet cake for our wedding was not only beautiful but also the most delicious cake I\'ve ever tasted. All our guests asked for her contact!',
    rating: 5,
    date: 'December 2023',
    imageColor: 'bg-pink-400',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Client',
    content: 'We\'ve ordered multiple times for office celebrations. The cakes are always fresh, beautifully decorated, and arrive right on time. The chocolate truffle cake is our team favorite!',
    rating: 5,
    date: 'January 2024',
    imageColor: 'bg-blue-400',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Birthday Celebration',
    content: 'My daughter\'s unicorn cake was magical! Monika captured exactly what we wanted. The cake was moist, flavorful, and the decoration was perfect. Worth every penny!',
    rating: 5,
    date: 'February 2024',
    imageColor: 'bg-purple-400',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Anniversary',
    content: 'I surprised my wife with a custom anniversary cake. Monika worked with me to create something special. The cake was exquisite and made our celebration unforgettable.',
    rating: 5,
    date: 'November 2023',
    imageColor: 'bg-green-400',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Baby Shower',
    content: 'The gender reveal cake was perfect! Not only did it reveal the gender beautifully, but it was also delicious. Monika\'s attention to detail is incredible.',
    rating: 5,
    date: 'March 2024',
    imageColor: 'bg-yellow-400',
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Retirement Party',
    content: 'Ordered a large custom cake for my father\'s retirement. It fed 50 people and everyone raved about how good it was. The lemon zest flavor was particularly amazing.',
    rating: 5,
    date: 'January 2024',
    imageColor: 'bg-red-400',
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <Quote className="h-5 w-5 text-rose-500" />
            <span className="text-gray-700 font-semibold">Customer Love</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-rose-500">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our happy customers have to say about their experience.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 shadow-xl card-hover border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 ${testimonial.imageColor} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-rose-100" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="text-sm text-gray-500">{testimonial.date}</div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={nextPage}
            className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === index
                  ? 'bg-rose-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">98%</div>
            <div className="text-gray-600">Repeat Orders</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;