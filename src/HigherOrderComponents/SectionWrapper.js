import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    // Only use min-h-screen for Hero and Experience pages
    const minHeightPages = ["hero", "experience", "about"];
    const minHeightClass = minHeightPages.includes(idName) ? "min-h-screen" : "";
    return (
      <div className={`relative w-full ${minHeightClass}`}> 
        <img 
          src={require("../assets/goutham_ghibli.png")}
          alt="Goutham Ghibli Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
          style={{zIndex: 0}}
        />
        <motion.section 
          variants={staggerContainer()}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true,amount:0.25}}
          className={`${styles.padding} max-w-7xl mx-auto relative z-10`}
        >
          <span className="hash-span" id={idName}></span>
          <Component />
        </motion.section>
      </div>
    );
  };
export default SectionWrapper;
