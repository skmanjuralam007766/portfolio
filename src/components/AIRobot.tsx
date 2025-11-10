import { useEffect, useState } from 'react';
import { useScroll } from '../context/ScrollContext';
import { Bot, Sparkles } from 'lucide-react';

const AIRobot = () => {
  const { currentSection, scrollProgress } = useScroll();
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const messages = [
      "Hello! I'm SK Manjur Alam's AI assistant. Let me show you his digital world.",
      "Let me tell you about SK's journey and education...",
      "Check out these amazing technical skills!",
      "Here are some incredible projects SK has built...",
      "Look at these impressive achievements!",
      "Ready to connect? Here's how to reach out!",
      "Thanks for visiting! Let's build the future together!",
    ];

    setMessage(messages[currentSection] || messages[0]);
  }, [currentSection]);

  const robotY = 20 + Math.sin(scrollProgress * 10) * 10;
  const robotRotate = Math.sin(scrollProgress * 8) * 5;

  return (
    <div
      className={`fixed z-50 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        right: '2rem',
        top: `${robotY}%`,
        transform: `rotate(${robotRotate}deg)`,
      }}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-2xl border-2 border-cyan-400 shadow-2xl">
          <Bot className="w-12 h-12 text-cyan-400 animate-pulse" />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-violet-400 animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {message && (
          <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 mr-4 w-64 bg-slate-900/95 backdrop-blur-sm p-4 rounded-lg border border-cyan-400 shadow-xl">
            <div className="text-cyan-300 text-sm leading-relaxed">{message}</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-cyan-400"></div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default AIRobot;
