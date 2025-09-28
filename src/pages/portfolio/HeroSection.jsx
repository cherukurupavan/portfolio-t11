import React from 'react';
import IconButton from '../../components/ui/IconButton';

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row justify-start items-center w-full min-h-[630px] py-8 lg:py-0">
          {/* Text Content */}
          <div className="w-full lg:w-[48%] flex flex-col justify-center items-start gap-6 lg:gap-[6px] order-2 lg:order-1 mt-8 lg:mt-0">
            {/* Main Heading */}
            <div className="flex flex-col gap-2 lg:gap-[6px] w-full">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-2 sm:gap-4">
                <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
                  Hello I am
                </h1>
                <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
                  Flora Sheen.
                </h1>
              </div>
              
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
                Frontend
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-2 sm:gap-4">
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
                  Based In
                </h2>
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
                  India.
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-500 w-full mt-4 lg:mt-8">
              I am Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start items-center gap-4 sm:gap-8 w-full mt-6 lg:mt-8">
              <IconButton
                src="/images/img_social_icon.svg"
                alt="Social Icon"
                width={20}
                height={20}
                backgroundColor="#000000"
                borderRadius="4px"
                padding="18px"
                className="w-[56px] h-[56px]"
                border=""
                position="relative"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
              
              <IconButton
                src="/images/img_button.svg"
                alt="Social Button"
                width={20}
                height={20}
                border="2px solid #000000"
                borderRadius="4px"
                padding="18px"
                className="w-[56px] h-[56px] bg-transparent"
                position="relative"
                variant="secondary"
                size="medium"
                onClick={() => {}}
              />
              
              <IconButton
                src="/images/img_social_icon_black_900.svg"
                alt="Social Icon"
                width={20}
                height={20}
                border="2px solid #000000"
                borderRadius="4px"
                padding="18px"
                className="w-[56px] h-[56px] bg-transparent"
                position="relative"
                variant="secondary"
                size="medium"
                onClick={() => {}}
              />
              
              <IconButton
                src="/images/img_button_black_900.svg"
                alt="Social Button"
                width={20}
                height={20}
                border="2px solid #000000"
                borderRadius="4px"
                padding="18px"
                className="w-[56px] h-[56px] bg-transparent"
                position="relative"
                variant="secondary"
                size="medium"
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-[52%] flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <img 
              src="/images/img_banner.svg" 
              alt="Flora Sheen - Frontend Developer"
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[630px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;