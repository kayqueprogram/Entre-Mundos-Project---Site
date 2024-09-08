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

export const metadata: Metadata = {
  title: "Entre Mundos - Visual Novel(Comtemplado na LPG)",
  description: "Projeto de game Visual Novel, contemplado no edital de Conteúdos Digitais, da Lei Paulo Gustavo, de incentivo á produção cultural - 2024. (Lei Complementar n.º 195, de 08 de julho de 2022)",
  src: "https://cdn.discordapp.com/attachments/1217656113546268754/1282439381453377557/image1.jpg?ex=66df5c3f&is=66de0abf&hm=7eef3aef386788904055748fe767858f6d0ee2286e42dc08590e2d76706bc36d&",
  // outros metadados
};

export default function Home() {
  return (
    <>""
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
