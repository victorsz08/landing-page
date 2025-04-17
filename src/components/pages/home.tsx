"use client";

import { PerfilImage } from "../images/perfil-image";
import { Button } from "../ui/button";
import { motion } from "framer-motion"

export function Home() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  }

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.6 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8 + custom * 0.1,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  }


  return (
    <section id="inicio" className="h-screen flex justify-around items-center px-14 max-sm:flex-col
    max-sm:pt-48 max-sm:px-8 max-sm:w-full max-sm:h-full max-sm:gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-4xl font-bold text-slate-100
        max-sm:text-3xl max-sm:text-center">
          <motion.h1 className="text-red-600" initial="hidden" animate="visible" custom={0} variants={titleVariants}>
            TREINO 100% INDIVIDUAL PARA
          </motion.h1>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={titleVariants}>
            ALCANÇAR SEUS OBJETIVOS
          </motion.h1>
          <motion.h1 className="text-red-600" initial="hidden" animate="visible" custom={2} variants={titleVariants}>
            SEM ENROLAÇÃO
          </motion.h1>
        </div>
        <motion.small
          className="text-sm font-light text-slate-300 max-sm:text-center max-sm:text-xs
          max-sm:w-full"
          initial="hidden"
          animate="visible"
          variants={descriptionVariants}
        >
          Alcance seus objetivos com um plano de treino personalizado e foco total nos resultados.
        </motion.small>

        <motion.section
          className="mt-6 flex items-center gap-3 max-sm:flex-col max-sm:gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={0}
            variants={buttonVariants}
          >
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-6 max-sm:px-3 max-sm:text-sm 
             rounded-md text-base max-sm:w-full"
            >
              <a href="#planos" >
                Comece sua transformação hoje! 🔥
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={1}
            variants={buttonVariants}
          >
            <Button
              asChild
              className="bg-transparent border border-red-600 text-red-600
               font-bold py-6 px-6 max-sm:px-3 rounded-md text-base max-sm:w-full hover:bg-transparent hover:filter hover:brightness-50 max-sm:text-sm"
            >
              <a href="#sobre">Sobre a consultoria</a>
            </Button>
          </motion.div>
        </motion.section>
      </div>
      <motion.div variants={titleVariants} initial="hidden" animate="visible" custom={0} >
        <PerfilImage />
      </motion.div>
    </section>
  );
}
