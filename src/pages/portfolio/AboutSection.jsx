import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 lg:py-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-[42%] flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src="/images/img_group_1000015859.svg" 
              alt="About Flora Sheen"
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[518px] h-auto object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[50%] flex flex-col justify-start items-start gap-6 lg:gap-8 order-1 lg:order-2">
            {/* Title */}
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-2 sm:gap-4">
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
                About
              </h2>
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
                Me
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              <p className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-500 w-full">
                I am a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
              </p>

              <p className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-500 w-full">
                I began my journey as a web developer in 2015, and since then, I have continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I am building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
              </p>

              <p className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-500 w-full">
                When I am not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;