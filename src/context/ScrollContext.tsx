import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  scrollProgress: number;
  currentSection: number;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollProgress: 0,
  currentSection: 0,
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);

      const sections = 7;
      const section = Math.floor(progress * sections);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollProgress, currentSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
