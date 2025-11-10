import { useEffect, useRef, useState } from 'react';
import { GraduationCap, User, MapPin, Calendar, Code2, Trophy } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    { year: '2023', event: 'Started IT Journey at Haridwar University', icon: GraduationCap },
    { year: '2024', event: 'Intern Full Stack Development', icon: Code2 },
    { year: '2025', event: 'Explored AI & Machine Learning', icon: Trophy },
    { year: '2025', event: 'Building Innovative Projects', icon: Code2 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-cyan-400/30 shadow-2xl">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-full flex items-center justify-center border-4 border-cyan-300 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <User className="w-24 h-24 text-white" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                    <span className="text-lg">Haridwar University</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-6 h-6 text-violet-400" />
                    <span className="text-lg">Haridwar, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-6 h-6 text-fuchsia-400" />
                    <span className="text-lg">IT Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-violet-400/30 shadow-xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate IT student at Haridwar University, constantly pushing the boundaries
                  of technology. My journey spans across artificial intelligence, full-stack development.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-cyan-400/30 shadow-xl">
                <h3 className="text-2xl font-bold text-violet-400 mb-4">My Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Transforming innovative ideas into powerful digital solutions that make a real-world impact.
                  I believe in continuous learning and applying cutting-edge technologies to solve complex problems.
                </p>
              </div>

              <div className="relative mt-8">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">My Journey</h3>
                <div className="space-y-6">
                  {timelineItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-start gap-4 transition-all duration-500 transform ${
                          isVisible
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                      >
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center border-2 border-cyan-300 shadow-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          {index < timelineItems.length - 1 && (
                            <div className="absolute left-1/2 top-12 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-violet-400"></div>
                          )}
                        </div>
                        <div className="flex-1 bg-slate-900/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-400/20">
                          <div className="text-cyan-400 font-bold text-sm mb-1">{item.year}</div>
                          <div className="text-gray-300">{item.event}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
