import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, Phone } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 40, color: 'from-green-500 to-emerald-500' },
    { name: 'Bootstrap', level: 75, color: 'from-blue-600 to-purple-600' },
    { name: 'Material UI', level: 75, color: 'from-blue-600 to-purple-600' },
    // { name: 'MongoDB', level: 70, color: 'from-green-600 to-teal-600' }
  ];

  const projects = [
    {
      title: 'Netflix Clone',
      // description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '../public/netflix.jpg',
      tags: ['Html', 'Css'],
      github: 'https://github.com/Shuaibahmed9080/netflix',
      live: 'https://netflexcolon1234.netlify.app/'
    },
    {
      title: 'Gym Management System',
      // description: 'Collaborative task management tool with real-time updates',
      image: '../public/gym.jpg',
      tags: ['Html', 'Css'],
      github: 'https://github.com/Shuaibahmed9080/Gym-task',
      live: 'https://gymwebpage19980.netlify.app/'
    },
    {
      title: 'Sumsung website Clone',
      // description: 'Interactive weather dashboard with data visualization',
      image: '../public/sumsung12.webp',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/practice',
      live: 'https://samsung12.netlify.app/'
    },
    {
      title: 'Al-huda-Islamic-website',
      // description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '../public/Al-Huda.jpg',
      tags: ['html', 'css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/portfolio',
      live: 'https://al-huda-islamic-school.netlify.app/'
    },
    {
      title: 'To-Do-list',
      // description: 'Collaborative task management tool with real-time updates',
      image: '../public/todolist.jpg',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/Todo-list',
      live: 'https://todo-list-app321.netlify.app/'
    },
    {
      title: 'Quiz',
      // description: 'Interactive weather dashboard with data visualization',
      image: '../public/QUIZ.webp',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/Quiz',
      live: 'https://quiz-js1.netlify.app/'
    },
    {
      title: 'PIzza-website',
      // description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '../public/pizza-12.webp',
      tags: ['html', 'css', 'Bootstrap'],
      github: 'https://github.com/Shuaibahmed9080/bstex1',
      live: 'https://pizzawebsite1122.netlify.app/'
    },
    {
      title: 'Qr-Code Generator',
      // description: 'Collaborative task management tool with real-time updates',
      image: '../public/alipay-5417256_1280.jpg',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/qrcode',
      live: 'https://qrcode-scan1.netlify.app/'
    },
    {
      title: 'Tic-Tac-Toe',
      // description: 'Interactive weather dashboard with data visualization',
      image: '../public/tictactoe.jpg',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/tictactoe',
      live: 'https://tic-tac-toe332.netlify.app/'
    },
    {
      title: 'color-picker',
      // description: 'Collaborative task management tool with real-time updates',
      image: '../public/COLOR.jpg',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/color',
      live: 'https://color-picker123.netlify.app/'
    },
    {
      title: 'Form-Validation',
      // description: 'Interactive weather dashboard with data visualization',
      image: '../public/registration.jpg',
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/registerationvalid',
      live: 'https://regform-valid.netlify.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${activeSection === section
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white capitalize w-full text-left"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

        {/* Content Container */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between z-10 px-4 max-w-6xl w-full">

          {/* Left (Text Content - appears below on mobile) */}
          <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shuaib Ahmed P
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              I'm a FrontEnd Developer
            </p>

            <div className="flex justify-center md:justify-start space-x-6">
              {/* <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-full font-medium transition-colors"
              >
                Get In Touch
              </button> */}
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
             px-5 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 md:text-lg 
             rounded-full font-medium transition-all transform hover:scale-105"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-gray-400 
             px-5 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 md:text-lg 
             rounded-full font-medium transition-colors"
              >
                Get In Touch
              </button>

            </div>
          </div>

          {/* Right (Image - appears on top on mobile) */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-[20px]">
              <div className="w-full h-full bg-gray-900 rounded-[16px] flex items-center justify-center overflow-hidden">
                <img
                  src="../public/firstlook.jpg"
                  alt="Shuaib Ahmed P"
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="/firstlook.jpg" // ✅ correct path if image is in public folder
                  alt="Shuaib"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">I'm a passionate developer who loves to create</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Hi, I'm Shuaib, a passionate frontend developer eager to create seamless and engaging web experiences. As a fresher, I’m constantly learning and exploring new technologies to build clean, responsive, and user-friendly interfaces. I'm excited to collaborate, grow, and bring creative ideas to life. Let’s connect!"
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      {/* <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <Code size={80} className="text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">I'm a passionate developer who loves to create</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
               "Hi, I'm Shuaib, a passionate frontend developer eager to create seamless and engaging web experiences. As a fresher, I’m constantly learning and exploring new technologies to build clean, responsive, and user-friendly interfaces. I'm excited to collaborate, grow, and bring creative ideas to life. Let’s connect!"
              </p>
              {/* <p className="text-gray-300 mb-8 leading-relaxed"> */}
      {/* When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community. I believe in continuous
                learning and staying updated with the latest industry trends.
              </p> */}
      {/* <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">100+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div> */}
      {/* </div>
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-lg">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400" size={20} />
                  <span>pshuaib9943@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-400" size={20} />
                  <span>+91 9943806697</span>
                </div>
                <div className="flex space-x-6 pt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Message sent! (This is a demo)')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 SHUAIB AHMED. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;