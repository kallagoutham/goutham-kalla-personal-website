import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../HigherOrderComponents/SectionWrapper";

const icons ={
  //eslint-disable-next-line
  "web": require("../assets/web.png"),
  "mobile": require("../assets/mobile.png"),
  "backend": require("../assets/backend.png"),
  "creator": require("../assets/creator.png"),
}

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card min-h-[180px]"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-teritary rounded-[20px] py-5 px-12 mih-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icons[icon]} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white-100 text-lg font-semibold mt-5">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div className="pt-20 pb-10 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Tech enthusiast and engineer with experience at leading companies like AT&T, passionate about driving innovation and solving complex challenges.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About,"about");
