import { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Star, Medal, Target, Zap, Sparkles } from 'lucide-react';

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const achievements = [
    {
      title: 'Full Stack Developer',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      description: 'Modern web development stack',
      year: '2024',
    },
    {
      title: 'AI/ML Enthusiast',
      icon: Sparkles,
      color: 'from-violet-400 to-purple-600',
      description: 'Built multiple AI-powered applications',
      year: '2025',
    },
    // {
    //   title: 'Data Analytics Pro',
    //   icon: Target,
    //   color: 'from-cyan-400 to-blue-600',
    //   description: 'Created advanced analytics dashboards',
    //   year: '2024',
    // },
    // {
    //   title: 'Cybersecurity Trained',
    //   icon: Medal,
    //   color: 'from-red-400 to-pink-600',
    //   description: 'Certified in security best practices',
    //   year: '2024',
    // },
    // {
    //   title: 'Problem Solver',
    //   icon: Zap,
    //   color: 'from-emerald-400 to-green-600',
    //   description: 'Solved 100+ coding challenges',
    //   year: '2024',
    // },
    // {
    //   title: 'Innovation Award',
    //   icon: Star,
    //   color: 'from-fuchsia-400 to-pink-600',
    //   description: 'Recognized for creative solutions',
    //   year: '2025',
    // },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-xl">Milestones in my journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100 rotate-0'
                    : 'translate-y-20 opacity-0 rotate-12'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animation: isVisible
                    ? `float ${3 + (index % 3)}s ease-in-out infinite`
                    : 'none',
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="relative group h-full">
                  <div
                    className={`absolute -inset-3 bg-gradient-to-r ${achievement.color} rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
                  ></div>

                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-yellow-400/30 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="px-3 py-1 bg-slate-800/50 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold">
                        {achievement.year}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {achievement.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="mt-6 flex justify-center">
                      <Award className="w-12 h-12 text-yellow-400 opacity-20 group-hover:opacity-40 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-8 py-6 rounded-2xl border-2 border-yellow-400/30 shadow-xl">
              {/* <div className="flex items-center justify-center gap-4 mb-2">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <span className="text-4xl font-bold text-white">10+</span>
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div> */}
              <p className="text-gray-300 text-lg">
                Certifications & Achievements Earned
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
