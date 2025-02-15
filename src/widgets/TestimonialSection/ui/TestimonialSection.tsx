import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "We got the best that you can wear a dress. Clothes that make you sophisticated...",
    author: "Lora Jasmin",
    role: "Fashion Designer",
  },
  {
    id: 2,
    text: "Elegant fashion that brings out your confidence...",
    author: "Emily Carter",
    role: "Style Consultant",
  },
];

export const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold">Testimonial</h2>
      <p className="text-gray-600 my-4">{testimonials[index].text}</p>
      <div className="text-sm font-semibold">
        <p>{testimonials[index].author}</p>
        <p className="text-gray-400">{testimonials[index].role}</p>
      </div>
      <div className="text-pink-500 absolute bottom-4 right-4 text-2xl" />

      <div className="mt-4 flex justify-between">
        <button
          onClick={prevTestimonial}
          className="bg-gray-200 rounded-full p-2"
        >
          <div />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-gray-200 rounded-full p-2"
        >
          <div />
        </button>
      </div>
    </div>
  );
};
