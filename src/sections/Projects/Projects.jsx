import styles from './ProjectsStyles.module.css';
import movixer from '../../assets/Movixer.png';
import refokus from '../../assets/refokus.png';
import obys from '../../assets/obys.png';
// import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle font-semibold tracking-wide text-xl">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={movixer}
          link="https://movixer.vercel.app/"
          h3="Movixer"
          p="Streaming App"
        />
        <ProjectCard
          src={refokus}
          link="https://refokus-clone-beta.vercel.app/"
          h3="Refokus-clone"
          p="Portfolio Website"
        />
        <ProjectCard
          src={obys}
          link="https://curlsnape.github.io/OBYS-AGENCY/"
          h3="Obys Agency-clone"
          p="Portfolio Website"
        />
        {/* <ProjectCard
          src={fitLift}
          link=""
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
