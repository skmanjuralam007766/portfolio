import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'skmanjuralam076@gmail.com',
      link: 'skmanjuralam076@gmail.com',
      color: 'from-red-400 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'SK Manjur Alam',
      link: 'https://www.linkedin.com/in/sk-manjur-alam-0ba72b306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'skmanjuralam007766',
      link: 'https://github.com/skmanjuralam007766',
      color: 'from-gray-400 to-slate-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9641188657',
      link: 'tel:+919641188657',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-xl">
            Ready to build the future together?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-30"></div>

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-cyan-400/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <MessageSquare className="w-10 h-10 text-cyan-400" />
                  <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Your Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Send me massage....."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative">
                      <div
                        className={`absolute -inset-2 bg-gradient-to-r ${method.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                      ></div>

                      <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-cyan-400/30 shadow-xl transform group-hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-400 text-sm">
                              {method.label}
                            </div>
                            <div className="text-white font-semibold text-lg">
                              {method.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-30"></div>

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-violet-400/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-violet-400" />
                  <h3 className="text-2xl font-bold text-white">Location</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Haridwar University
                  <br />
                  Roorkee, Uttarakhand
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <p className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4">
                "Turning ideas into digital reality"
              </p>
              <p className="text-xl text-cyan-400">— SK Manjur Alam</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-full border border-cyan-400/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Available for opportunities</span>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-cyan-400/20">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-6">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="text-cyan-400 font-mono text-xs opacity-30"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
            <p className="text-gray-500">
              © 2025 SK Manjur Alam. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Built with passion, powered by innovation
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
