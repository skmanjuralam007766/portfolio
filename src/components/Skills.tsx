import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Brain, Layout, Globe } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: 'HTML/CSS/JS',
      icon: Code2,
      color: 'from-orange-400 to-red-500',
      level: 100,
      description: 'Frontend Fundamentals',
    },
    {
      name: 'React',
      icon: Layout,
      color: 'from-cyan-400 to-blue-500',
      level: 100,
      description: 'Modern UI Framework',
    },
    {
      name: 'Python',
      icon: Code2,
      color: 'from-yellow-400 to-blue-500',
      level: 100,
      description: 'Versatile Programming',
    },
    {
      name: 'C/C++',
      icon: Code2,
      color: 'from-yellow-400 to-blue-500',
      level: 100,
      description: 'Versatile Programming',
    },
    {
      name: 'Python(library and frameworks)',
      icon: Code2,
      color: 'from-yellow-400 to-blue-500',
      level: 100,
      description: 'Versatile Programming',
    },
    // {
    //   name: 'Spring Boot',
    //   icon: Server,
    //   color: 'from-green-400 to-emerald-600',
    //   level: 85,
    //   description: 'Java Backend',
    // },
    {
      name: 'SQL',
      icon: Database,
      color: 'from-blue-400 to-indigo-500',
      level: 100,
      description: 'Database Management',
    },
    // {
    //   name: 'Firebase',
    //   icon: Zap,
    //   color: 'from-yellow-400 to-orange-500',
    //   level: 87,
    //   description: 'Cloud Platform',
    // },
    {
      name: 'AI/ML',
      icon: Brain,
      color: 'from-violet-400 to-purple-600',
      level: 100,
      description: 'Artificial Intelligence',
    },
    // {
    //   name: 'Cybersecurity',
    //   icon: Shield,
    //   color: 'from-red-400 to-pink-500',
    //   level: 80,
    //   description: 'Security & Protection',
    // },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-xl">Hover over skills to see details</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === index;
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-20 opacity-0 scale-50'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative group h-full">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-cyan-400/30 shadow-2xl transform ${
                      isHovered ? 'scale-110 -translate-y-2' : ''
                    } transition-all duration-300`}
                  >
                    <div
                      className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-xl transform ${
                        isHovered ? 'rotate-12 scale-110' : ''
                      } transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-center text-xl font-bold text-white mb-2">
                      {skill.name}
                    </h3>

                    {isHovered && (
                      <div className="text-center text-sm text-gray-400 mb-3 transition-all duration-300">
                        {skill.description}
                      </div>
                    )}

                    <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 300}ms`,
                        }}
                      ></div>
                    </div>

                    {isHovered && (
                      <div className="text-center text-xs text-cyan-400 mt-2 font-semibold">
                        
                      </div>
                    )}

                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-violet-400/30 shadow-xl">
            <Globe className="w-8 h-8 text-violet-400 mx-auto mb-2 animate-spin" style={{ animationDuration: '4s' }} />
            <p className="text-gray-300 text-lg">
              Always learning, always evolving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
