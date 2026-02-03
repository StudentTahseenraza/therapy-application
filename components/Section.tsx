"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: "background" | "secondary" | "white" | "olive" | "black" | "slate" | "none";
  padding?: "normal" | "large";
  id?: string;
  fullWidth?: boolean;
}

const Section = ({
  children,
  className = "",
  bgColor = "none",
  padding = "normal",
  id,
  fullWidth = false,
}: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgColors: Record<string, string> = {
    white: "bg-white",
    secondary: "bg-secondary",
    background: "bg-background",
    olive: "bg-[#8A8650]",
    black: "bg-black",
    slate: "bg-[#476f95]",
    none: "",
  };

  const paddings = {
    normal: "py-16 md:py-20",
    large: "py-20 md:py-28",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`relative w-full ${bgColors[bgColor]} ${paddings[padding]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          ${fullWidth ? "" : "max-w-7xl mx-auto"}
          px-0 sm:px-0 md:px-6 lg:px-12
        `}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
