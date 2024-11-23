"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Cantar sobre HTML",
        description: "HTML It´s not a Programming Lenguage!",
        href: "https://www.youtube.com/watch?v=9WeYdjR6jH0",
    },
    {
        num: "02",
        title: "Enseñar a Estudiar",
        description: "Da varias tecnicas sobre como estudiar",
        href: "https://www.youtube.com/watch?v=YQfRVo5UwOM",
    },
    {
        num: "03",
        title: "Esconder Velas",
        description: "Tiene una tendencia enfermiza de insertarse objetos",
        href: "https://youtu.be/o_s6Q-teA6U?t=408",
    },
    {
        num: "04",
        title: "Senior StackOverflow",
        description: "Este tipo, sabe imitar muy bien a los Seniors de Stack",
        href: "https://www.youtube.com/watch?v=f9JwsSxp5NQ",
    },
];

const Services = () => {
    const [showMusic, setShowMusic] = useState(false);
    const [showLumberjack, setShowLumberjack] = useState(false);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            <p className="text-white/60">{service.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-4xl font-semibold">La decision suprema:</h1>
                <br/>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                }}>
                    <div className="flex flex-col items-center mt-12 gap-6">
                        <h1 className="text-2xl font-semibold"> 
                            1_ Boton Azul: Permitimos al sujeto permanecer en la realidad fabricada de HTML5.
                            <br/>
                            <br/>
                            2_ Boton Rojo: Permite ingresar al mundo real de Lumberjack y su perdicion.
                            <br/>
                            <br/>
                            3_ Ambas: Estara por la eternidad en un mundo soñado por cualquier programador
                            <br/>
                            <br />
                            Dager y Juli o Chat: Que eleccion tomaran? 
                        </h1>
                        {/* Botones para mostrar los iframes */}
                        <div className="flex justify-center gap-10">
                            <Button
                                onClick={() => setShowMusic(!showMusic)}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-yellow-600 transition"
                            >
                                Música
                            </Button>
                            <Button
                                onClick={() => setShowLumberjack(!showLumberjack)}
                                className="bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition"
                            >
                                Lumberjack
                            </Button>
                        </div>
                    </div>

                    {/* Contenedor de los iframes */}
                    <div
                        className={`mt-12 ${
                            showMusic && showLumberjack
                                ? "grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center"
                                : "flex flex-col items-center space-y-8"
                        }`}
                    >
                        {showMusic && (
                            <div className="flex justify-center items-center w-full">
                                <iframe
                                    src="https://open.spotify.com/embed/artist/6bkClBMJd4qKxJp0J5vHsz?utm_source=generator&theme=0"
                                    width={showMusic && showLumberjack ? "100%" : "60%"}
                                    height={showMusic && showLumberjack ? "300" : "380"}
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="rounded-md border-2 border-blue-500 shadow-lg"
                                ></iframe>
                            </div>
                        )}
                        {showLumberjack && (
                            <div className="flex justify-center items-center w-full">
                                <iframe
                                    title="Lumber Jack Game"
                                    src="https://tbot.xyz/lumber/"
                                    width={showMusic && showLumberjack ? "100%" : "30%"}
                                    height={showMusic && showLumberjack ? "600" : "800"}
                                    className="rounded-md border-2 border-green-500 shadow-lg"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section> 
    );
};

export default Services;
