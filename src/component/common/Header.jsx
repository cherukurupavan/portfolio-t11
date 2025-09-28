import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:py-8">
          {/* Logo Section */}
          <div className="flex items-center gap-[20px]">
            <div className="flex items-center p-[6px]">
              <div className="w-[8px] h-[8px] bg-black rounded-[4px] mb-[10px]"></div>
            </div>
            <h1 className="text-lg md:text-xl font-bold text-black capitalize">
              Personal
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 lg:p-0">
              <a 
                href="#about" 
                className="text-base md:text-lg font-semibold text-black capitalize hover:text-gray-600 transition-colors"
              >
                About Me
              </a>
              <a 
                href="#skills" 
                className="text-base md:text-lg font-semibold text-black capitalize hover:text-gray-600 transition-colors"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-base md:text-lg font-semibold text-black capitalize hover:text-gray-600 transition-colors"
              >
                Project
              </a>
              <a 
                href="#contact" 
                className="text-base md:text-lg font-semibold text-black capitalize hover:text-gray-600 transition-colors"
              >
                Contact me
              </a>
            </div>
          </nav>

          {/* Resume Button */}
          <div className="hidden lg:block">
            <Button
              text="Resume"
              text_font_size="20"
              text_font_family="Sora"
              text_font_weight="600"
              text_line_height="26px"
              text_text_align="left"
              text_color="#ffffff"
              fill_background_color="#000000"
              border_border_radius="4px"
              padding="12px 40px 12px 20px"
              className="flex items-center gap-2"
              layout_gap=""
              layout_width=""
              position=""
              variant=""
              size=""
              onClick={() => {}}
            >
              Resume
              <img 
                src="/images/img_download.svg" 
                alt="Download" 
                width={20} 
                height={20}
                className="ml-2"
              />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;