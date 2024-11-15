import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='overflow-hidden'>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
