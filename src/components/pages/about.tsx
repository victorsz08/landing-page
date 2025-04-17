"use client";

import Image from "next/image";
import bg from "@/app/assets/bg-image-01.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#b91c1c", // Vermelho mais escuro no hover
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.15, // Mantendo a opacidade original
      transition: { duration: 1.5 },
    },
  };

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="flex relative flex-col gap-10 items-center justify-center w-full 
            h-screen max-sm:h-full max-sm:pt-16 max-sm:px-8 max-sm:w-full"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={backgroundVariants}
      >
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>
      <motion.section
        className="flex flex-col z-10 items-center text-center py-8 
        px-32 gap-10 max-sm:gap-8 max-sm:px-8 max-sm:py-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl font-bold text-slate-100 max-sm:text-xl"
          variants={itemVariants}
        >
          Consultoria online personalizada! Treinos de acordo com seu objetivo, feito para você evoluir rapidamente e com métodos eficazes 
        </motion.h1>

        <div
          className="flex flex-col items gap-10 text-center font-normal text-base text-slate-400
        max-sm:gap-6 max-sm:text-xs"
        >
          <motion.p custom={0} variants={paragraphVariants}>
            Se você está cansado de treinar sem ver resultados e quer evoluir de
            verdade, eu tenho o método certo para você! Minha consultoria online
            é focada em resultados reais, com estratégias testadas e comprovadas
            cientificamente para máximo desempenho muscular no menor tempo
            possível.
          </motion.p>

          <motion.p custom={1} variants={paragraphVariants}>
            🔥 Treinos Otimizados para o máximo resultado em qualquer objetivo!
            – são Protocolos de musculação com técnicas avançadas para acelerar
            seus ganhos.
          </motion.p>
        </div>

        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 max-sm:px-4 
           rounded-md text-base max-sm:w-full"
          >
            <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
              Transforme seu corpo agora 🔥
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </section>
  );
}
