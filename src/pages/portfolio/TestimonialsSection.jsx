import React from 'react';
import Line from '../../components/common/Line';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Evren Shah",
      role: "Designer",
      image: "/images/img_ellipse_2664.png",
      quote: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      bgColor: "#ffffff",
      textColor: "#404040",
      lineColor: "#000000",
      quoteIcon: "/images/img_frame_17.svg"
    },
    {
      id: 2,
      name: "Flora sheen",
      role: "Designer",
      image: "/images/img_ellipse_2664_96x96.png",
      quote: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      bgColor: "#000000",
      textColor: "#ffffff",
      lineColor: "#ffffff",
      quoteIcon: "/images/img_frame_17_white_a700.svg"
    },
    {
      id: 3,
      name: "Evren Shah",
      role: "Designer",
      image: "/images/img_ellipse_2664.png",
      quote: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      bgColor: "#ffffff",
      textColor: "#404040",
      lineColor: "#000000",
      quoteIcon: "/images/img_frame_17.svg"
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[60px]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[60px] justify-start items-center w-full">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center w-full">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
              My
            </h2>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
              Testimonial
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="flex flex-col gap-4 sm:gap-6 justify-center items-center w-full h-auto rounded-[20px] p-6 sm:p-9 shadow-[0px_8px_16px_#18274b14]"
                style={{ backgroundColor: testimonial?.bgColor }}
              >
                {/* Profile Section */}
                <div className="flex flex-col justify-start items-center w-[32%] relative">
                  <img 
                    src={testimonial?.image} 
                    alt={testimonial?.name}
                    width={96}
                    height={96}
                    className="w-[96px] h-[96px] object-cover rounded-full"
                  />
                  <img 
                    src={testimonial?.quoteIcon} 
                    alt="Quote"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] object-contain absolute -bottom-4 right-0"
                  />
                </div>

                {/* Quote */}
                <p 
                  className="text-sm sm:text-base font-normal leading-4 sm:leading-5 text-center w-full"
                  style={{ color: testimonial?.textColor }}
                >
                  {testimonial?.quote}
                </p>

                {/* Divider Line */}
                <Line 
                  width="120px" 
                  height="2px" 
                  backgroundColor={testimonial?.lineColor}
                  className="mx-auto"
                />

                {/* Name and Role */}
                <div className="flex flex-col gap-2 justify-start items-center">
                  <h3 
                    className="text-lg sm:text-xl font-semibold leading-6 sm:leading-7 text-center capitalize"
                    style={{ color: testimonial?.textColor }}
                  >
                    {testimonial?.name}
                  </h3>
                  <p 
                    className="text-sm sm:text-base font-semibold leading-5 sm:leading-6 text-center"
                    style={{ color: testimonial?.bgColor === "#000000" ? "#ffffff" : "#71717a" }}
                  >
                    {testimonial?.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;