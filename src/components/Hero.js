import { styles } from "../styles";
import { useState, useEffect, useRef } from "react";
import { name } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Hero = () => {
  const ref = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]">
            <div className="w-0.5 ml-2.5 mt-5 sm:h-80 h-40 violet-gradient"></div>
          </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm &nbsp;{" "}
            <motion.span variants={textVariant()} className="text-[#915eff]">
              {" "}
              {text}
            </motion.span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Software Engineer.
          </p>
          <div className="mt-10 px-10">
        <img 
          src={require("../assets/goutham_1.jpg") }
          alt="Your description" 
          className="w-48 h-auto rounded-2xl shadow-lg"
        />
      </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
