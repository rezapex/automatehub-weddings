"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import { useEffect, useRef } from "react";
import LandingHero from "./landing-hero";

export const Hero = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video?.play();
          } else {
            video?.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center"
      >
        <Badge onClick={() => router.push("/blog/top-5-llm-of-all-time")}>
          Coming Soon
        </Badge>
      </motion.div>
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
      >
        <Balancer>
          Wedding Planning. <span className="text-purple-400">Made Easy.</span>
        </Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          Our AI-powered platform simplifies every aspect of wedding planning,
          from venue selection to guest management, making your special day
          truly unforgettable.
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <Button>Get started</Button>
        <Button
          variant="simple"
          as={Link}
          href="/contact"
          className="flex space-x-2 items-center group"
        >
          <span>Contact us</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <LandingHero />
          {/* <video
            ref={videoRef}
            className="rounded-[20px] w-full h-auto"
            poster="/AutomateHubHero/1.gif"
            playsInline
            loop
            muted
            preload="none"
          >
            <source src="/AutomateHubHero/hero.webm" type="video/gif" />
            <source src="/AutomateHubHero/hero.mp4" type="video/gif" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </div>
  );
};
