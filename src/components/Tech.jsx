import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          delay: 0.2,
        }}
      >
        <div className="text-center text-5xl font-bold text-white mb-12 relative">
          Technologies I Use.
        </div>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((tech) => (
          <div
            className="w-24 h-24 bg-[#0A0A0A] rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer hover:bg-[#0F0F0F] border border-white/5 hover:border-white/10"
            key={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-white/70 text-xs text-center mt-1">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
