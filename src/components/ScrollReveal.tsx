import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animationType?:
    | "fadeUp"
    | "fadeDown"
    | "fadeLeft"
    | "fadeRight"
    | "scale"
    | "parallax";
  duration?: number;
  animateOnce?: boolean;
  delay?: number;
}

export default function ScrollReveal({
  children,
  animationType = "fadeUp",
  duration = 0.8,
  animateOnce = true,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animation variants based on type
  const getAnimationProps = () => {
    switch (animationType) {
      case "fadeUp":
        return {
          initial: { opacity: 0, y: 100 },
          whileInView: { opacity: 1, y: 0 },
        };
      case "fadeDown":
        return {
          initial: { opacity: 0, y: -100 },
          whileInView: { opacity: 1, y: 0 },
        };
      case "fadeLeft":
        return {
          initial: { opacity: 0, x: -100 },
          whileInView: { opacity: 1, x: 0 },
        };
      case "fadeRight":
        return {
          initial: { opacity: 0, x: 100 },
          whileInView: { opacity: 1, x: 0 },
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
        };
      case "parallax":
        const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          style: { y },
        };
      default:
        return {
          initial: { opacity: 0, y: 100 },
          whileInView: { opacity: 1, y: 0 },
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      viewport={{ once: animateOnce, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
