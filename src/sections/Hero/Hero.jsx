import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Akshay Sawant Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img style={{marginLeft:'22px'}}
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Akshay Sawant"
        />
        <img style={{paddingLeft:'5px'}}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className='text-xl font-bold font-[inter]'>
          Akshay
         
          Sawant
        </h1>
        <h2 className='text-lg font-semibold font-[inter]'>Frontend Developer</h2>
        <span>
        
          <a href="https://github.com/curlsnape" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p style={{marginLeft:'9px'}}
         className={styles.description}>
          Heyy, myself Akshay with a passion for developing modern and creative React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover mr-3">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
