import React from 'react';
import Button from '../ui/Button';
import EditText from '../ui/EditText';
import TextArea from '../ui/TextArea';
import IconButton from '../ui/IconButton';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-0">
          {/* Contact Form Section */}
          <div className="w-full lg:w-[46%] py-5">
            <div className="flex flex-col gap-5 w-full">
              <EditText
                placeholder="Your name"
                text_font_size="16"
                text_font_family="Sora"
                text_font_weight="400"
                text_line_height="21px"
                text_text_align="left"
                text_color="#71717a"
                border_border="1px solid #000000"
                border_border_radius="4px"
                padding="14px 24px"
                layout_width="82%"
                className="w-full md:w-[82%]"
                position="relative"
                variant="default"
                size="medium"
                value=""
                onChange={() => {}}
              />
              
              <EditText
                placeholder="Email"
                text_font_size="16"
                text_font_family="Sora"
                text_font_weight="400"
                text_line_height="21px"
                text_text_align="left"
                text_color="#71717a"
                border_border="1px solid #000000"
                border_border_radius="4px"
                padding="14px 24px"
                layout_width="82%"
                className="w-full md:w-[82%]"
                type="email"
                position="relative"
                variant="default"
                size="medium"
                value=""
                onChange={() => {}}
              />
              
              <EditText
                placeholder="Your website (If exists)"
                text_font_size="16"
                text_font_family="Sora"
                text_font_weight="400"
                text_line_height="21px"
                text_text_align="left"
                text_color="#71717a"
                border_border="1px solid #000000"
                border_border_radius="4px"
                padding="14px 24px"
                layout_width="82%"
                className="w-full md:w-[82%]"
                type="url"
                position="relative"
                variant="default"
                size="medium"
                value=""
                onChange={() => {}}
              />
              
              <TextArea
                placeholder="How can I help?*"
                text_font_size="16"
                text_font_family="Sora"
                text_font_weight="400"
                text_line_height="21px"
                text_text_align="left"
                text_color="#71717a"
                border_border="1px solid #000000"
                border_border_radius="4px"
                padding="12px 24px"
                layout_width="82%"
                className="w-full md:w-[82%] min-h-[120px]"
                rows={6}
                position="relative"
                variant="default"
                size="medium"
                value=""
                onChange={() => {}}
              />
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full md:w-[80%]">
                <Button
                  text="Get In Touch"
                  text_font_size="20"
                  text_font_family="Sora"
                  text_font_weight="600"
                  text_line_height="26px"
                  text_text_align="left"
                  text_color="#ffffff"
                  fill_background_color="#000000"
                  border_border_radius="4px"
                  padding="12px 20px"
                  layout_gap="0px"
                  layout_width="auto"
                  position="relative"
                  variant="default"
                  size="medium"
                  className=""
                  onClick={() => {}}
                />
                
                {/* Social Icons */}
                <div className="flex justify-between items-center gap-4 flex-1">
                  <IconButton
                    src="/images/img_social_icon.svg"
                    alt="Social Icon"
                    width={20}
                    height={20}
                    backgroundColor="#000000"
                    borderRadius="4px"
                    padding="18px"
                    className="w-[56px] h-[56px]"
                    border="none"
                    position="relative"
                    variant="default"
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
                    className="w-[56px] h-[56px]"
                    position="relative"
                    variant="default"
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
                    className="w-[56px] h-[56px]"
                    position="relative"
                    variant="default"
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
                    className="w-[56px] h-[56px]"
                    position="relative"
                    variant="default"
                    size="medium"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="w-full lg:w-[46%] py-5">
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col justify-center items-start w-full py-[58px]">
                <div className="flex flex-col gap-[2px] justify-start items-start w-full md:w-[74%]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full md:w-[68%] gap-2 sm:gap-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                      Let's
                    </h2>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                      for
                    </h2>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                    Something special
                  </h2>
                </div>
                
                <p className="text-base font-normal leading-6 text-gray-500 w-full mt-[10px]">
                  I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                </p>
                
                <div className="flex flex-col gap-2 mt-9">
                  <a 
                    href="mailto:Youremail@gmail.com" 
                    className="text-xl sm:text-2xl font-semibold text-black hover:text-gray-600 transition-colors"
                  >
                    Youremail@gmail.com
                  </a>
                  <a 
                    href="tel:1234567890" 
                    className="text-xl sm:text-2xl font-semibold text-black hover:text-gray-600 transition-colors"
                  >
                    1234567890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;