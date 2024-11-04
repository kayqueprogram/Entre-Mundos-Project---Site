import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre o game"
        description="Entre Mundos"
      />


     
      <AboutSectionOne />
      <AboutSectionTwo/>
      <AboutSectionThree/>

    
    </>
  );
};

export default AboutPage;

/*

  <AboutSectionOne />
      <AboutSectionTwo />
      */