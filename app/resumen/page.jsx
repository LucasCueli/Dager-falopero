"use client";

import {
    FaHtml5, 
    FaCss3,
} from 'react-icons/fa';

import { SiTailwindcss, SiNodedotjs } from 'react-icons/si';

//about date
const about = {
    title: 'Sobre Mi',
    description: "Breve resumen sobre los datos encontrados en Internet.",
    info: [
        {
            fieldName: "Name",
            fieldValue : "Dot Dager o Mariano Villa"
        },
        {
            fieldName: "Phone",
            fieldValue : "+54 (PARA QUE LO QUERES) 123"
        },
        {
            fieldName: "Experiencia",
            fieldValue : "12 Años de puros pepinos"
        },
        {
            fieldName: "Nationality",
            fieldValue : "Argentino PAPA"
        },
        {
            fieldName: "Email",
            fieldValue : "tuviejaputaconmipingoseahoga@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue : "Ponele que libre."
        },
        {
            fieldName: "Languages",
            fieldValue : "Extensa sabiduria sobre todo lo Falico. "
        },
    ]
};

//experiencia date
const experiencia = {
    icon: '/assets/resume/badge.svg',
    title: 'Mis Experiencias Laborales',
    description: "Adivinaste. Se escribir en idioma Lorem Ipsum (Increible no?)",
    items: [
        {
            company : "Tinelli y Asociados S.A",
            position: "Tester de pepinos",
            duration : "Todo el tiempo",
        },
        {
            company : "Travestis y Ladyboys S.A",
            position: "Servicios Cariñosos por la noche",
            duration : "Permanente o hasta que el siempresucio deje",
        },
        {
            company : "Musico",
            position: "Html it´s not a programming lenguage",
            duration : "Es un groso.",
        },
    ]
};

//education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Mi educacion",
    description: "Esta data me la pasaron del discord (?",
    items: [
        {
           institution: "Onlyfans",
           degree: "Ni idea hermano, aun lo busco",
           duration: "Hasta que ChatGPT se rompa",
        },
        {
            institution: "Colegio == ? Quien te conoce papa?",
            degree: "Ni idea hermano, aun lo busco",
            duration: "Si lo busco me doxean",
        }
    ]
};

//skills data
const skills = {
    title: "Mis habilidades",
    description: "Si, solo sabe HTML 5 y CSS. C# Nunca existio. Fue un sueño",
    skillList: [
        {
           icon: <FaHtml5 />,
           name: "html 5", 
        },
        {
            icon: <FaCss3 />,
            name: "css 3", 
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";



const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition:{delay: 2.4, duration: 0.4, ease: "easeIn"
                },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue='experiencia' 
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experiencia">Experiencias</TabsTrigger>
                        <TabsTrigger value="education">Educacion</TabsTrigger>
                        <TabsTrigger value="skills">Habilidades</TabsTrigger>
                        <TabsTrigger value="about">Sobre Mi</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experiencia */}
                        <TabsContent value="experiencia" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experiencia.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experiencia.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid gird-cols-1 lg:gird-cols-2 gap-[30px]'>
                                        {experiencia.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid gird-cols-1 lg:gird-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.institution}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.duration}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent tansition-all duration-300'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>
                                                    {item.fieldName}
                                                </span>
                                                <span className='text-xl'>
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume