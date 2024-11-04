import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

/*   <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Personagens
          </h1>
        </div>*/


const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">


            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0 image"
              data-wow-delay=".15s"
            >

              <Image
                src="/images/about/sprite_toya.png"
                alt="about image"
                width={600}
                height={336}
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
          <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          Toya Takahashi 
          </h1>
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Idade
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                 18
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 Personalidade
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Toya é um jovem de postura serena e sofisticada, com uma inteligência aguçada e um raciocínio bem desenvolvido. Seus amigos frequentemente o enxergam como uma figura mais experiente e confiável, recorrendo a ele em busca de conselhos, graças ao seu forte senso social. Sua calma e responsabilidade fazem dele um conciliador natural, sempre buscando harmonia nas situações, o que inspira confiança e respeito em quem o conhece.             </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Sobre o personagem
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Ele é cego de nascença, e seus pais o abandonaram quando era pequeno por isso ele vive no orfanato. Durante seu crescimento ele conseguiu criar a habilidade física e percepção para treinar jiu-jitsu, se tornando muito bom na arte da luta. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
