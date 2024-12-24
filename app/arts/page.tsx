
import AboutSectionOne from "@/components/About/AboutSectionOne";
import ArtsSectionOne from "@/components/Arts/ArtsSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ArtsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Artes no game"
        description="As artes que foram usadas no game serão disponibilizadas aqui!"
      />


    <ArtsSectionOne />
      

    
    </>
  );
};

export default ArtsPage;


/**
      <AboutSectionTwo/>
      <AboutSectionThree/>
      <AboutSectionFour/>**/
/*

  <AboutSectionOne />
      <AboutSectionTwo />
      */