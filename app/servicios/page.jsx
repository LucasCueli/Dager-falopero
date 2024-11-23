"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
    {
        num:'01',
        title: 'Cantar sobre HTML',
        description: 'HTML It´s not a Programming Lenguage!',
        href: "https://www.youtube.com/watch?v=9WeYdjR6jH0",
    },
    {
        num:'02',
        title: 'Enseñar a Estudiar',
        description: 'Da varias tecnicas sobre como estudiar',
        href: "https://www.youtube.com/watch?v=YQfRVo5UwOM",
    },
    {
        num:'03',
        title: 'Esconder Velas',
        description: 'Tiene una tendencia enfermiza de insertarse objetos',
        href: "https://youtu.be/o_s6Q-teA6U?t=408",
    },
    {
        num:'04',
        title: 'Senior StackOverflow',
        description: 'Este tipo, sabe imitar muy bien a los Seniors de Stack',
        href: "https://www.youtube.com/watch?v=f9JwsSxp5NQ",
    },
]

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
            <div className='container mx-auto'>
                <motion.div 
                    initial={{opacity:0}} 
                    animate={{
                        opacity: 1, 
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
                    }}
                    className='grid gird-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map((service, index) => {
                        return(
                            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                        {service.num}
                                    </div>
                                    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                        <BsArrowDownRight  className='text-primary text-3xl'/>
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                                {/* description */}
                                <p className='text-white/60'>{service.description}</p>
                                {/* border */}
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>                
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35vh'}}>Antes del Lumberjack Un Poco de Musica o No?</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                <iframe  src="https://open.spotify.com/embed/artist/6bkClBMJd4qKxJp0J5vHsz?utm_source=generator&theme=0" width="100%" height="152"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh'}}>Watch Out! Here It Comes, The Lumberjack!</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <iframe title="Lumber Jack Game" src="https://tbot.xyz/lumber/" width="600" height="1200"></iframe>
            </div>

        </section>      
    );
};

export default Services