import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { toRotateText } from "../constants/index";
const Home = () => {
  const [text, setText] = useState("");

  const TYPING_PERIOD = 1000;
  const TYPING_SPEED = 40;
  const INITIAL_DELAY = 400;

  const typewriterState = useRef({
    loopNum: 0,
    isDeleting: false,
    delta: 300 - Math.random() * 100,
  });

  const tick = useCallback(() => {
    const { loopNum, isDeleting, delta } = typewriterState.current;
    const i = loopNum % toRotateText.length;
    const fullText = toRotateText[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      typewriterState.current.delta = delta / 1.9;
    }

    if (!isDeleting && updatedText === fullText) {
      typewriterState.current.isDeleting = true;
      typewriterState.current.delta = TYPING_PERIOD;
    }

    if (isDeleting && updatedText === "") {
      typewriterState.current.isDeleting = false;
      typewriterState.current.loopNum = loopNum + 1;
      typewriterState.current.delta = INITIAL_DELAY;
    }

    if (!isDeleting && updatedText !== fullText) {
      typewriterState.current.delta = TYPING_SPEED;
    }
  }, [text]);

  useEffect(() => {
    let ticker = setInterval(tick, typewriterState.current.delta);
    return () => {
      clearInterval(ticker);
      ticker = null;
    };
  }, [tick]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.homeHeadText}`}>
            Hi, I'm&nbsp;
            <span className="text-[#915eff] whitespace-nowrap">Niranjan</span>
          </h1>
          <p className={`${styles.homeRotateText}`}>
            <span className="txt-rotate">
              <span className="wrap">{text}</span>
            </span>
          </p>
          <p className={`${styles.homeSubText} mt-2 text-white-100`}>
            I begin as a{" "}
            <span className="text-[#915eff]">curious explorer</span>,
            <br />
            grow as a <span className="text-[#915eff]">dedicated coder</span>,
            <br />
            and thrive as a{" "}
            <span className="text-[#915eff]">nature enthusiast</span>.
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
