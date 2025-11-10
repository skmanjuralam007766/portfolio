import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Background from './components/Background';
import AIRobot from './components/AIRobot';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <ScrollProvider>
      <div className="relative overflow-x-hidden bg-black">
        <Background />
        <AIRobot />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </ScrollProvider>
  );
}

export default App;
