"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Stio's Brand Ambassadors",
    designation: "Authority",
    message:
      "Outdoor enthusiasts need to know that a product is durable and safe (sometimes in extreme conditions!) before they will purchase it.",
  },
  {
    id: 2,
    name: "Blue Apron's Instagram How-To",
    designation: "Social Media, Authority",
    message:
      "This testimonial by Instagram influencer Cody Tries Stuff is great because it's easily shared via social media or the company's website.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Sometimes, testimonials don't have to come from customers. They can come from friends, family, or anyone else.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Fabletics leverages social media to collect testimonials from its customers. ",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Trustpilot is a highly regarded review site. High ratings give personal care company Harry‘s a major vote of confidence.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "We love the simple carousel format and the way you can click through different industries for quotes. ",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-800 py-10">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      <div
        className="bg-white rounded-lg shadow-md p-6"
        style={{ minHeight: '250px', maxHeight: '250px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <p
          className="text-gray-700 mb-4"
          // style={{ maxHeight: "100px", overflow: "hidden" }}
        >
          {testimonial.message}
        </p>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
