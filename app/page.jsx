import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Inicio = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Catador de Pepinos, Musico y Programador</span>
            <h1 className="h1 mb-6">
              Buenas a todos, aca <br /> <span className="text-accent">Dot Dager</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Catador profesional de pepinos en busca del crunch perfecto, músico que convierte cualquier ruido en melodía, y programador que a veces encuentra más bugs que líneas de código funcional. Maestro del equilibrio entre creatividad, lógica y un buen sentido del humor.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
    
  );
};

export default Inicio;
