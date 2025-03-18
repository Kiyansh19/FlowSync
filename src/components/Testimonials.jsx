// src/components/Testimonials.js
import React from "react";
import testimonials from "./testimonialsData";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Testimonials = () => {
  const shuffledTestimonials = shuffleArray([...testimonials]);

  return (
    <section className="bg-gradient-to-b from-blue-200 via-blue-100 to-white py-12 px-6 pb-35 " id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 ">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 border hover:scale-105 duration-150 cursor-alias">
              <div className="flex gap-1 mb-2 text-yellow-500">
                {Array(testimonial.rating).fill("⭐")}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border object-cover "
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
