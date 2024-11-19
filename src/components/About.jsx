import React from "react";
// import Tilt from "react-tilt";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.1}
      transitionSpeed={450}
      tiltReverse={true}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-[#0A0A0A] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-[#0F0F0F] transition-colors duration-300">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="bg-about-pattern md:bg-auto bg-no-repeat xl:bg-right bg-right-top max-md:bg-20% md:bg-40%">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        I'm Niranjan Kumar, a full-stack developer with a Bachelor's in Computer
        Science & Engineering. On the frontend, I specialize in React.js,
        Next.js, and TypeScript to build modern, type-safe web applications. My
        backend expertise includes Spring Boot for Java microservices and
        FastAPI for Python-based REST APIs. I focus on delivering scalable and
        efficient full-stack solutions using these cutting-edge technologies.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
