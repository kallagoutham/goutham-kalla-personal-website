import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../HigherOrderComponents/SectionWrapper";
import { textVariant } from "../utils/motion";

const companyIcons = {
  //eslint-disable-next-line
  "at&t": require("../assets/company/T_BIG.png"),
  ennea: require("../assets/company/ennea_solutions.png"),
  brainovision: require("../assets/company/brainovision_logo.png"),
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#fff", color: "#222", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
      contentArrowStyle={{ borderRight: "7px solid #eee" }}
      date={experience?.date}
      iconStyle={{ background: "#fff", color: "#222", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={companyIcons[experience?.icon]}
            alt={experience?.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience?.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience?.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience?.points.map((point,index) => (
            <li key={`experience-point-${index}`} className="text-black text-[13px] pl-1 tracking-wider">{point}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <div className="pt-20 pb-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
