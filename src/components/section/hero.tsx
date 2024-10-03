import { SiAppletv } from "react-icons/si";
import { Button } from "../Button";
import { Container } from "../Container";

import heroImg from "../../../public/posters/Screenshot-2024-01-29-at-17.05.37.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute  z-[5px] -top-[--header-height] left-0 w-full h-[200vh]"
      >
        <img
          className="h-screen sticky top-0 w-[100%] object-cover"
          src={heroImg}
          alt=""
        />
      </motion.div>
      <Container className="relative z-10 pb-7 h-[--hero-height] ">
        <motion.div
          className="flex flex-col h-full justify-end items-start"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          viewport={{ amount: 0.99 }}
          animate="hidden"
          exit="hidden"
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Originals. <br /> Only on Apple TV+.
          </h1>
          <Button size="large" className="mb-16">
            Stream now
          </Button>
          <p className="font-semibold">
            Watch on the <SiAppletv className="inline" /> app.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};
