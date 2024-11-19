import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { footerIcons } from "../constants/index";
import niranjan_logo from "../assets/niranjan_logo.svg";
const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full flex flex-col gap-10 md:flex-row justify-evenly items-center py-5 min-h-[300px] top-0 z-20 bg-primary`}
    >
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex justify-center items-center gap-10"
      >

        <div className="flex flex-col gap-2">
         
         <p className="text-sm text-gray-400">
           &copy; Copyright 2024. All Rights Reserved.
         </p>
       </div>
        <p className="text-white text-[24px] font-bold cursor-pointer md:flex">
          &nbsp;
          <img
            src={niranjan_logo}
            alt="Niranjan Logo"
            className="sm:block hidden"
          />
        </p>

        
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col justify-center items-center gap-5"
      >
        <div className="flex gap-10 social-icon">
          {footerIcons.map((icon, index) => (
            <Link
              to={icon.link}
              target="_blank"
              className="link"
              key={icon.name}
            >
              <img src={icon.icon} alt={icon.name} />
            </Link>
          ))}
        </div>
        <div className="flex">
          <div className="heart top-[0.6rem] right-[0.625rem]" />
          <p>Let's get in touch now</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
