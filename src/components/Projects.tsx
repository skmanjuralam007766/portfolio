import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Dumbbell, BarChart3, Shield, Globe, X } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const projects = [
    {
      title: 'AI-Powered Fitness Planner',
      icon: Dumbbell,
      color: 'from-emerald-400 to-green-600',
      description: 'Intelligent workout planning system using machine learning algorithms',
      longDescription:
        'A comprehensive fitness application that uses AI to create personalized workout plans based on user goals, fitness level, and available equipment. Features include progress tracking, nutrition suggestions, and adaptive training schedules.',
      tech: ['Python', 'TensorFlow', 'React'],
      features: [
        'Personalized workout generation',
        'Progress tracking & analytics',
        'Nutrition recommendations',
        'Adaptive difficulty scaling',
      ],
    },
    {
      title: 'AI-based Exam Proctoring System',
      icon: BarChart3,
      color: 'from-blue-400 to-cyan-600',
      description: 'Real-time exam monitoring with AI to ensure integrity',
      longDescription:
        'Real time exam proctioring system that leveages AI to monitor students during online exams. The system detects suspicious behavior, verifies identity, and ensures a fair testing environment through facial recognition and behavior analysis.',
      tech: ['HTML', 'CSS', 'JavaScript', 'python', 'OpenCV'],
      features: [
        'Facial recognition for identity verification',
        'Behavior analysis to detect cheating',
        'Real-time alerts for proctors',
        'Comprehensive reporting post-exam',
      ],
    },
    {
      title: 'Road accident detection and Tourist safety system',
      icon: Shield,
      color: 'from-red-400 to-pink-600',
      description: 'Real-time road accident detection and tourist safety application',
      longDescription:
        'A mobile application designed to enhance road safety by detecting accidents in real-time using AI and sensor data. The app automatically alerts emergency services and designated contacts, providing location details to ensure prompt assistance.',
      tech: ['React', 'Tensorflow', 'OpenCV', 'Pytorch', 'Numpy', 'YOlOv5'],
      features: [
        'Real-time accident detection using AI',
        'Automatic emergency alerts with GPS location',
        'User-friendly interface for tourists',
        'Safety tips and local emergency contacts',
      ],
    },
    {
      title: 'Library Management System',
      icon: Globe,
      color: 'from-violet-400 to-purple-600',
      description: 'library management system with modern web technologies',
      longDescription:
        'A full-stack web application for managing library operations including book inventory, member management, and lending processes. The system features a user-friendly interface for both librarians and members, with real-time updates and reporting capabilities.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      features: [
        'Book inventory management',
        'Member registration and management',
        'Lending and return tracking',
        'Real-time availability updates',
        
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-xl">Click to explore in detail</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="relative group cursor-pointer h-full"
                  onClick={() => setSelectedProject(index)}
                >
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                  ></div>

                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-cyan-400/30 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                    <div
                      className={`w-20 h-20 mb-6 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-800/50 border border-cyan-400/30 rounded-full text-cyan-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                        <span>View More</span>
                      </button>
                      {/* <button className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors">
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border-2 border-cyan-400 shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-red-400" />
            </button>

            {(() => {
              const project = projects[selectedProject];
              const Icon = project.icon;
              return (
                <>
                  <div
                    className={`w-24 h-24 mb-6 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-xl`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-violet-400 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-slate-800 border-2 border-cyan-400/50 rounded-lg text-cyan-400 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </button>
                    {/* <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all">
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </button> */}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
