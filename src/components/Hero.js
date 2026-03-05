import { styles } from "../styles";
import { useState, useEffect, useRef } from "react";
import { name } from "../constants";

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
    <section className="relative w-full h-screen mx-auto bg-white overflow-hidden">
      <img 
        src={require("../assets/goutham_ghibli.png")}
        alt="Goutham Ghibli" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
        style={{zIndex: 0}}
      />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{zIndex: 1}}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-black">
            <div className="w-0.5 ml-2.5 mt-5 sm:h-80 h-40 bg-black"></div>
          </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} relative z-10`}>
            Hi, I'm <span className="font-bold text-black">Goutham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black relative z-10`}>
            I am a Software Engineer passionate about superb design and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
