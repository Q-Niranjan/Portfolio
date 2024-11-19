import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { resumelink } from "../constants";

const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;

    Object.keys(form).forEach((field) => {
      if (!form[field]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `Please write down your ${field}`,
        }));
        hasErrors = true;
      }
    });

    if (!validateEmail(form.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please using a valid email address",
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceKey,
        templateKey,
        {
          from_name: form.name,
          to_name: "Niranjan",
          from_email: form.email,
          to_email: "niranjan882684@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message! I will get back to you as soon as possible."
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  const getInputBorderClass = (field) => {
    return errors[field] ? "border border-red-500" : "border-none";
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#0A0A0A] p-4 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
      >
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 md:mt-12 flex flex-col gap-4 md:gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-2 md:mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-[#0F0F0F] py-3 md:py-4 px-4 md:px-6 placeholder:text-white/50 rounded-lg text-white outline-none border border-white/5 hover:border-white/10 transition-all font-medium text-sm md:text-base"
            />
            {errors.name && (
              <p className="text-red-500 mt-2 text-sm">{errors.name}</p>
            )}
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-2 md:mb-4">
              Your Email
            </span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-[#0F0F0F] py-3 md:py-4 px-4 md:px-6 placeholder:text-white/50 rounded-lg text-white outline-none border border-white/5 hover:border-white/10 transition-all font-medium text-sm md:text-base"
            />
            {errors.email && (
              <p className="text-red-500 mt-2 text-sm">{errors.email}</p>
            )}
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-2 md:mb-4">
              Your message
            </span>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="bg-[#0F0F0F] py-3 md:py-4 px-4 md:px-6 placeholder:text-white/50 rounded-lg text-white outline-none border border-white/5 hover:border-white/10 transition-all font-medium min-h-[100px] md:min-h-[150px] text-sm md:text-base"
            />
            {errors.message && (
              <p className="text-red-500 mt-2 text-sm">{errors.message}</p>
            )}
          </label>

          <button
            type="submit"
            className="bg-[#0A0A0A] py-2.5 md:py-3 px-6 md:px-8 w-fit text-white font-bold rounded-xl border border-white/5 hover:border-white/10 hover:bg-[#0F0F0F] hover:scale-105 transition-all text-sm md:text-base mx-auto sm:mx-0"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[400px] bg-[#0A0A0A] rounded-2xl relative overflow-hidden border border-white/5 hover:border-white/10 transition-all"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Header Section */}
          <div className="mb-4 sm:mb-6 md:mb-8 max-w-lg text-center sm:text-left px-2 sm:px-4 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              Transforming ideas into elegant solutions. Available for
              challenging projects that push the boundaries of innovation.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
            <div className="bg-[#0F0F0F] p-4 sm:p-5 md:p-6 rounded-xl border border-white/5 hover:border-white/10 hover:scale-105 transition-all">
              <h3 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Location
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                HSR Layout, Bangalore, India
              </p>
              <p className="text-white/60 text-xs sm:text-sm mt-1 sm:mt-2">
                Open to relocation
              </p>
            </div>

            <div className="bg-[#0F0F0F] p-4 sm:p-5 md:p-6 rounded-xl border border-white/5 hover:border-white/10 hover:scale-105 transition-all">
              <h3 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Work Preferences
              </h3>
              <ul className="text-white/80 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  Remote Positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  On-site Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  Freelance Projects
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 w-full">
            <a
              href="mailto:niranjan882684@gmail.com"
              className="bg-[#0A0A0A] py-2 sm:py-2.5 md:py-3 px-6 sm:px-7 md:px-8 rounded-xl text-white font-medium border border-white/5 hover:border-white/10 hover:bg-[#0F0F0F] hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg
                className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Email
            </a>
            <a
              href={resumelink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A0A0A] py-2 sm:py-2.5 md:py-3 px-6 sm:px-7 md:px-8 rounded-xl text-white font-medium border border-white/5 hover:border-white/10 hover:bg-[#0F0F0F] hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg
                className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Resume
            </a>
          </div>

          {/* Response Time Indicator */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 self-center sm:self-start sm:ml-4">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-xs sm:text-sm font-medium">
              Available now • Quick response guaranteed
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
