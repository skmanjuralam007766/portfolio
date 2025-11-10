import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['IT Student', 'Developer', 'AI Enthusiast', 'Full Stack Creator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/20 to-black"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-cyan-400 to-violet-600 rounded-full flex items-center justify-center border-4 border-cyan-300 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-20 h-20 text-white animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-pulse">
          Hi, I'm SK Manjur Alam
        </h1>

        <div className="h-16 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 transition-all duration-500 transform">
            {titles[titleIndex]}
          </h2>
        </div>

        <div className="mb-12 space-y-4">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Passionate about <span className="text-violet-400 font-semibold">AI&ML</span>,{' '}
            <span className="text-cyan-400 font-semibold">Full Stack Development</span>,{' '}
            {/* <span className="text-fuchsia-400 font-semibold">Data Analytics</span>, and{' '}
            <span className="text-emerald-400 font-semibold">Cybersecurity</span> */}
          </p>
          <p className="text-lg text-gray-400">
            Haridwar University | Turning ideas into digital reality
          </p>
        </div>

        <button
          onClick={scrollToNext}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
        </button>

        <div className="mt-16 flex justify-center gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-0.5 h-20 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
