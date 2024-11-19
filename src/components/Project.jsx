import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc/index";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_link,
  website_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxChars = 500;

  const ProjectImage = () => (
    <img
      src={image}
      alt={`${name} preview`}
      className={`w-full h-full object-cover rounded-2xl ${
        website_link ? "cursor-pointer" : ""
      }`}
      onClick={() => website_link && window.open(website_link, "_blank")}
    />
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#0A0A0A] p-5 rounded-2xl sm:w-[360px] w-full min-h-[660px] flex flex-col border border-white/5 hover:border-white/10 hover:scale-105 transition-all"
      >
        <div className="relative w-full h-[230px]">
          <ProjectImage />

          {source_link && (
            <div className="absolute top-0 right-0 m-3 card-img_hover">
              <div
                onClick={() => window.open(source_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-[#0A0A0A] border border-white/5 hover:border-white/10 hover:scale-105 transition-all"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex-grow flex flex-col">
          <div className="hover:bg-[#0F0F0F] transition-colors duration-300 p-3 rounded-lg">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          </div>

          <div className="mt-2 text-white/70 text-[14px] flex-grow tracking-wider">
            {description.length > maxChars
              ? isExpanded
                ? description
                : `${description.slice(0, maxChars)}...`
              : description}
          </div>

          {description.length > maxChars && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#0A0A0A] py-3 px-3 text-white font-bold rounded-xl w-fit-content my-3 hover:bg-[#0F0F0F] border border-white/5 hover:border-white/10 hover:scale-105 transition-all"
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pb-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] text-white/70 ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          I have completed several full-stack projects and regularly create
          applications using React, Next.js, TypeScript, FastAPI and Spring
          Boot. I'm passionate about exploring new technologies and frameworks
          to expand my programming skillset. Through continuous learning and
          staying current with industry trends, I embrace new challenges and
          opportunities for growth in software development.
        </motion.p>
      </div>

      <div className="mt-10 md:mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");
