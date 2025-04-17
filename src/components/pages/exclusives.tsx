"use client";

import Link from "next/link";
import { CardExclusives } from "../card-about/card-about";
import { Button } from "../ui/button";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export function Exclusives() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

    return (
      <section
      ref={ref}
        className="flex flex-col gap-14 items-center justify-center w-full 
        h-screen max-sm:h-full max-sm:gap-8 max-sm:py-8 max-sm:px-8 max-sm:w-full"
      >
        <motion.h1
          className="text-2xl font-bold text-slate-200 max-sm:text-xl text-center"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Descubra os benefícios exclusivos da minha consultoria personalizada!
        </motion.h1>
  
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
          className="w-full flex justify-center"
        >
          <CardExclusives />
        </motion.div>
  
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-slate-100 font-bold py-6 px-3 rounded-md text-base"
          >
            <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
              Comece sua transformação hoje! 🔥
            </Link>
          </Button>
        </motion.div>
      </section>
    );
}
