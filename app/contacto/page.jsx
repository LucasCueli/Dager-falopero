"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Telefono",
        description: "(+54) *Insertar telefono de tu vieja*",
    },
    {
        icon: <FaEnvelope />,
        title: "Correo Electronico",
        description: "Ejemplo: putoelquelee123@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Direccion",
        description: "En lo de tu hermana.",
    },
];

const Contacto = () => {
    return (
        <motion.section 
            initial = {{ opacity: 0}}
            animate = {{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[38px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">A ver con que me queres romper las bolas</h3>
                            <p className="text-white/60">
                                Que carajo queres? No entendes que ando ocupado?
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Tu nombre." />
                                <Input type="lastname" placeholder="Tu apellido." />
                                <Input type="email" placeholder="Tu correo electronico." />
                                <Input type="phone" placeholder="Tu cuenta bancaria." />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecciona un servicio para que Dager te ayude" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Elegi el servicio</SelectLabel>
                                        <SelectItem value="est">Numero telefonico de Travestis</SelectItem>
                                        <SelectItem value="cst">Video de Tinelli y Dager juntos</SelectItem>
                                        <SelectItem value="mst">Historia de que sucedio con la vela en esa ducha entre 2 machos.</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/*/ textarea */}
                            <Textarea 
                            className="h-[200px]"
                            placeholder="Cortita y al pie o programas en HTML5?"
                            />
                            {/* btn */}
                            <Button size="md" className="max-w-40">
                                No enviar.
                            </Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return ( 
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contacto