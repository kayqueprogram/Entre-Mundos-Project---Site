import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";

import Development from "@/components/Development";

import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

import Head from "next/head";

export const metadata: Metadata = {
  title: "Entre Mundos - Visual Novel(Comtemplado na LPG)",
  description: "Projeto de game Visual Novel, contemplado no edital de Conteúdos Digitais, da Lei Paulo Gustavo, de incentivo á produção cultural - 2024. (Lei Complementar n.º 195, de 08 de julho de 2022)",
};

export default function Home() {
  return (
    <>
    <Head>
      <meta name="google-site-verification" content="HXK5dnjVmPdWgukB5mk9Lwgk4KMk-DU6M6HYeWE9o-8" />
    </Head>
      <ScrollUp />
      <Hero />
      <Development />
      <Video />
      <Brands />
    
      <br/>
      <Testimonials />
      
    
    
    </>
  );
}
