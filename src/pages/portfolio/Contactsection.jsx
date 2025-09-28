import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-black py-12 sm:py-16 lg:py-6">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center w-full">
          <div className="flex justify-between items-center w-full bg-white rounded-none p-0">
            <div className="flex justify-center items-center w-full">
              <div className="text-center">
                <h2 className="text-lg sm:text-xl font-bold text-black capitalize mb-2">
                  Personal
                </h2>
                <div className="flex flex-col gap-1 justify-start items-end">
                  <p className="text-sm sm:text-base font-semibold text-black text-right">
                    @ 2019-2023 Personal
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-black text-right">
                    Made In Figma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;