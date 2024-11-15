import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { motion, stagger } from "framer-motion";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Akshay Sawant Resume.pdf";
import { useTheme } from "../../common/ThemeContext";
import gsap, { Power4 } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Hero() {
  const name = useRef(null);
  const role = useRef(null);
  const img = useRef(null);
  const linkend = useRef(null);
  const git = useRef(null);
  const spara = useRef(null);

  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(
      name.current,
      {
        x: -500,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        transition: Power4,
      },
      "same"
    );
    tl.from(
      img.current,
      {
        opacity: 0,
        x: 150,
        rotate: 360,
        duration: 0.5,
      },
      "same"
    );
    tl.from(role.current, {
      x: 500,
      opacity: 0,
      delay: 0.2,
      transition: Power4,
      duration: 0.4,
    });
    tl.from(
      linkend.current,
      {
        x: 200,
        opacity: 0,
        rotate: 360,
        delay: 0.2,
        transition: Power4,
        duration: 0.7,
      },
      "hey"
    );
    tl.from(
      git.current,
      {
        x: -100,
        opacity: 0,
        rotate: -360,
        delay: 0.2,
        transition: Power4,
        duration: 0.7,
      },
      "hey"
    );
  });
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          ref={img}
          style={{ marginLeft: "66px" }}
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Akshay Sawant"
        />
        <img
          style={{ paddingLeft: "5px" }}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div style={{ overflow: "hidden" }} className={styles.info}>
        <h1 ref={name} className="text-xl  font-bold font-[inter]">
          Akshay Sawant
        </h1>
        <h2 ref={role} className="text-lg font-semibold font-[inter]">
          Frontend Developer
        </h2>
        <span className=" overflow-hidden">
          <a ref={git} href="https://github.com/curlsnape" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            ref={linkend}
            href="https://www.linkedin.com/in/akshay-nandita-sawant-026059218/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>

        {[
          "Enthusiastic Frontend Developer, ex",
          "Intern at XIRCLS, with a focus on",
          "React.js and JavaScript.",
          "Eager to learn and",
          "contribute to creating impactful",
          "digital solutions. Let’s connect",
          "and innovate together!",
        ].map((item, i) => (
          <p style={{ marginLeft: "9px" }} className={styles.description}>
            <motion.span
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.8,
                delay: i * 0.3,
              }}
              className="inline-block origin-left leading-[2.2vw] sm:leading-3 "
            >
              {item}
            </motion.span>
          </p>
        ))}

        <a href={CV} download>
          <button className="hover mr-3">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
