import React from 'react';
import Grid from '../../components/common/Grid';


const SkillsSection = () => {
  const skills = [
    { id: 1, icon: "/images/img_icon_git.svg", name: "Git", bgColor: "#ffffff", textColor: "#000000" },
    { id: 2, icon: "/images/img_icon_javscript.svg", name: "javascript", bgColor: "#000000", textColor: "#ffffff" },
    { id: 3, icon: "/images/img_icon_sass.svg", name: "Sass/scss", bgColor: "#ffffff", textColor: "#000000" },
    { id: 4, icon: "/images/img_icon_nest.svg", name: "Nest.Js", bgColor: "#ffffff", textColor: "#000000" },
    { id: 5, icon: "/images/img_icon_storybook.svg", name: "Storybook", bgColor: "#ffffff", textColor: "#000000" },
    { id: 6, icon: "/images/img_icon_nest.svg", name: "Nest.Js", bgColor: "#ffffff", textColor: "#000000" },
    { id: 7, icon: "/images/img_icon_git.svg", name: "Git", bgColor: "#ffffff", textColor: "#000000" },
    { id: 8, icon: "/images/img_icon_storybook.svg", name: "Storybook", bgColor: "#ffffff", textColor: "#000000" },
    { id: 9, icon: "/images/img_icon_socket.svg", name: "Socket.io", bgColor: "#ffffff", textColor: "#000000" },
    { id: 10, icon: "/images/img_icon_sass.svg", name: "Sass/scss", bgColor: "#ffffff", textColor: "#000000" }
  ];

  return (
    <section id="skills" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[40px] justify-start items-center w-full">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center w-full">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
              My
            </h2>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px] text-black">
              Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <Grid className="w-full" gap="20px">
            {skills?.map((skill) => (
              <div
                key={skill?.id}
                className="flex flex-col gap-6 sm:gap-7 justify-center items-center w-full h-auto border-2 border-black rounded-sm p-6 sm:p-8"
                style={{ backgroundColor: skill?.bgColor }}
              >
                <img 
                  src={skill?.icon} 
                  alt={skill?.name}
                  width={56}
                  height={56}
                  className="w-[56px] h-[56px] object-contain"
                />
                <h3 
                  className="text-lg sm:text-xl font-bold leading-6 sm:leading-7 text-center capitalize"
                  style={{ color: skill?.textColor }}
                >
                  {skill?.name}
                </h3>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;