import styles from "./SkillsStyles.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa"; // Importing icons
import SkillList from "../../common/SkillList";
import { SiRedux, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle text-xl font-semibold">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={<FaHtml5 />} skill="HTML" />
        <SkillList src={<FaCss3Alt />} skill="CSS" />
        <SkillList src={<FaJs />} skill="JavaScript" />
      </div>

      <div className={styles.skillList}>
        <SkillList src={<FaReact />} skill="React Js" />
        <SkillList src={<FaBootstrap />} skill="Bootstrap" />
        <SkillList src={<SiTailwindcss />} skill="Tailwind CSS" />
      </div>

      <div className={styles.skillList}>
        <SkillList src={<SiRedux />} skill="Redux" />
        <SkillList src={<RiNextjsFill />} skill="Next Js" />
        <SkillList src={<SiThreedotjs />} skill="Three Js" />
      </div>
    </section>
  );
}

export default Skills;
