import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "../HigherOrderComponents/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({ index, project }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded 2-xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project?.image}
            alt={project.name}
            className="w-full h-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0  bg-black bg-opacity-50 rounded-2xl flex justify-center items-center opacity-0 hover:opacity-100 card-img_hover transition-all duration-300">
            <div onClick={()=>window.open(project.source_code_link,"blank")}
              className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
              </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-[14px]">{project.description}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 ">
          {project.tags.map((tag, index) => (
            <span
              key={`tag-${index}`}
              className={`text-[12px] ${tag.color} px-2 py-1 rounded`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="pt-20 pb-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following section showcases my projects, skills and related work.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              project={project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
