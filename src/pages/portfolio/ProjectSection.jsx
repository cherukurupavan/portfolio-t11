import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Crypto Screener Application",
      description: "I am Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image: "/images/img_image_771.png",
      imagePosition: "left"
    },
    {
      id: 2,
      number: "02",
      title: "Euphoria - Ecommerce (Apparels) Website Template",
      description: "I am Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.\nwhen an unknown printer took a galley of type and scrambled it to specimen book.",
      image: "/images/img_image_770.png",
      imagePosition: "right"
    },
    {
      id: 3,
      number: "03",
      title: "Blog Website Template",
      description: "I am Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image: "/images/img_image_770_396x530.png",
      imagePosition: "left"
    }
  ];

  return (
    <section id="projects" className="w-full bg-black py-12 sm:py-16 lg:py-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 justify-start items-center w-full">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center w-full">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-white">
              My
            </h2>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-white">
              Projects
            </h2>
          </div>

          {/* Projects List */}
          <div className="flex flex-col gap-16 sm:gap-20 lg:gap-[138px] w-full">
            {projects?.map((project, index) => (
              <div
                key={project?.id}
                className={`flex flex-col ${
                  project?.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                } justify-between items-center w-full gap-8 lg:gap-12`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-[44%] order-1 lg:order-none">
                  <img 
                    src={project?.image} 
                    alt={project?.title}
                    className="w-full h-auto object-cover rounded-[18px]"
                  />
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-[48%] flex flex-col gap-4 sm:gap-6 justify-start items-start order-2 lg:order-none">
                  <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-white">
                    {project?.number}
                  </h3>
                  
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-6 sm:leading-7 md:leading-8 lg:leading-[41px] text-white">
                    {project?.title}
                  </h4>
                  
                  <p className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-500 w-full whitespace-pre-line">
                    {project?.description}
                  </p>
                  
                  <button className="mt-4 lg:mt-6 p-0 bg-transparent border-none cursor-pointer">
                    <img 
                      src="/images/img_export.svg" 
                      alt="View Project"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] object-contain hover:opacity-80 transition-opacity"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;