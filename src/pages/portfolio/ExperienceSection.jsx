import React from 'react';
import List from '../../components/common/List';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Google",
      position: "Lead Software Engineer at Google",
      duration: "Nov 2019 - Present",
      description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      logo: "/images/img_vector_red_500.svg",
      bgColor: "transparent",
      textColor: "#ffffff",
      borderColor: "#71717a"
    },
    {
      id: 2,
      company: "Youtube",
      position: "Software Engineer at Youtube",
      duration: "Jan 2017 - Oct 2019",
      description: "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      logo: "/images/img_youtube.svg",
      bgColor: "#27272a",
      textColor: "#ffffff",
      borderColor: "transparent"
    },
    {
      id: 3,
      company: "Apple",
      position: "Junior Software Engineer at Apple",
      duration: "Jan 2016 - Dec 2017",
      description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
      logo: "/images/img_apple.svg",
      bgColor: "transparent",
      textColor: "#ffffff",
      borderColor: "#71717a"
    }
  ];

  return (
    <section className="w-full bg-black py-12 sm:py-16 lg:py-[60px]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[60px] justify-start items-center w-full">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center w-full">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-white">
              My
            </h2>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-white">
              Experience
            </h2>
          </div>

          {/* Experience List */}
          <List className="w-full" gap="32px">
            {experiences?.map((exp) => (
              <div
                key={exp?.id}
                className="flex flex-col gap-6 justify-start items-center w-full h-auto rounded-[10px] p-6 sm:p-7"
                style={{ 
                  backgroundColor: exp?.bgColor,
                  ...(exp?.borderColor !== "transparent" && { border: `1px solid ${exp?.borderColor}` })
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
                  <div className="flex justify-start items-center gap-6 sm:gap-8">
                    <img 
                      src={exp?.logo} 
                      alt={exp?.company}
                      width={32}
                      height={32}
                      className="w-[32px] h-[32px] object-contain"
                    />
                    <h3 
                      className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8"
                      style={{ color: exp?.textColor }}
                    >
                      {exp?.position}
                    </h3>
                  </div>
                  <span className="text-sm sm:text-base font-semibold leading-5 sm:leading-6 text-gray-300">
                    {exp?.duration}
                  </span>
                </div>

                {/* Description */}
                <p 
                  className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-left w-full"
                  style={{ color: exp?.textColor === "#ffffff" ? "#d4d4d8" : exp?.textColor }}
                >
                  {exp?.description}
                </p>
              </div>
            ))}
          </List>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;