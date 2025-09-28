import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Flora Sheen - Frontend Developer Portfolio | UI Design & React.js Expert Based in India</title>
        <meta name="description" content="Flora Sheen - Experienced Frontend Developer from India specializing in UI design, JavaScript, React.js, and Storybook. Former engineer at Google, YouTube & Apple. View portfolio projects including Crypto Screener Application and ecommerce templates. Contact for collaboration opportunities." />
        <meta property="og:title" content="Flora Sheen - Frontend Developer Portfolio | UI Design & React.js Expert Based in India" />
        <meta property="og:description" content="Flora Sheen - Experienced Frontend Developer from India specializing in UI design, JavaScript, React.js, and Storybook. Former engineer at Google, YouTube & Apple. View portfolio projects including Crypto Screener Application and ecommerce templates. Contact for collaboration opportunities." />
      </Helmet>

      <main className="w-full bg-white">
        <Header />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <Footer />
        <ContactSection />
      </main>
    </>
  );
};

export default Portfolio;