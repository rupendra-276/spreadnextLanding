"use client";
import React from "react";
import AiTalentInsights from "./AiTalentInsights";
import SmarterHiringSection from "./SmarterHiringSection";
import HowItWorksSection from "./HowItWorksSection";
import AITalentSection from "./AiTalentSection";
import HeroCTASection from "./HeroCTASection";
import FeaturesSection from "./hirebetter";
import ResponsiveTestimonials from './TestimenterContactSlider'
const page = () => {
  return (
    <>
      <AiTalentInsights />
      <SmarterHiringSection />
      <HowItWorksSection />
      <AITalentSection />
      <ResponsiveTestimonials />
      <FeaturesSection />
      <HeroCTASection />
    </>
  );
};

export default page;
