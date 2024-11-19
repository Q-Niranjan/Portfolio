import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants/index";
import { SectionWrapper } from "../hoc/index";
import { textVariant } from "../utils/motion";

const WorkCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0A0A0A",
        color: "#ffffff",
        border: "1px solid",
        borderImage:
          "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246)) 1",
      }}
      contentArrowStyle={{ borderRight: "7px solid #0A0A0A" }}
      date={experience.date}
      iconStyle={{
        background: "#0A0A0A",
        border: "3px solid rgb(147, 51, 234)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="hover:bg-[#0F0F0F] transition-colors duration-300 p-3 rounded-lg">
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          As part of my professional development, I've worked on...
        </p>
        <h2 className={styles.sectionHeadText}>Experiences</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <WorkCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
