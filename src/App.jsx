import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, Phone } from 'lucide-react';
import front from './assets/firstlook.jpg';
import Netflix from '../public/netflix.jpg'
import Gym from '../public/gym.jpg'
import Sumsung from '../public/sumsung12.webp'
import School from '../public/Al-Huda.jpg'
import Todolist from '../public/TODOLIST.jpg'
import quiz from '../public/QUIZ.webp'
import Pizza from '../public/pizza-12.webp'
import qr from '../public/alipay-5417256_1280.jpg'
import TTT from '../public/TICTACTOE.jpg'
import clp from '../public/COLOR.jpg'
import form from '../public/registration.jpg'

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
      image: [Netflix],
      tags: ['Html', 'Css'],
      github: 'https://github.com/Shuaibahmed9080/netflix',
      live: 'https://netflexcolon1234.netlify.app/'
    },
    {
      title: 'Gym Management System',
      // description: 'Collaborative task management tool with real-time updates',
      image: [Gym],
      tags: ['Html', 'Css'],
      github: 'https://github.com/Shuaibahmed9080/Gym-task',
      live: 'https://gymwebpage19980.netlify.app/'
    },
    {
      title: 'Sumsung website Clone',
      // description: 'Interactive weather dashboard with data visualization',
      image: [Sumsung],
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/practice',
      live: 'https://samsung12.netlify.app/'
    },
    {
      title: 'Al-huda-Islamic-website',
      // description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: [School],
      tags: ['html', 'css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/portfolio',
      live: 'https://al-huda-islamic-school.netlify.app/'
    },
    {
      title: 'To-Do-list',
      // description: 'Collaborative task management tool with real-time updates',
      image: [Todolist],
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/Todo-list',
      live: 'https://todo-list-app321.netlify.app/'
    },
    {
      title: 'Quiz',
      // description: 'Interactive weather dashboard with data visualization',
      image: [quiz],
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/Quiz',
      live: 'https://quiz-js1.netlify.app/'
    },
    {
      title: 'Pizza-website',
      // description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: [Pizza],
      tags: ['html', 'css', 'Bootstrap'],
      github: 'https://github.com/Shuaibahmed9080/bstex1',
      live: 'https://pizzawebsite1122.netlify.app/'
    },
    {
      title: 'Qr-Code Generator',
      // description: 'Collaborative task management tool with real-time updates',
      image: [qr],
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/qrcode',
      live: 'https://qrcode-scan1.netlify.app/'
    },
    {
      title: 'Tic-Tac-Toe',
      // description: 'Interactive weather dashboard with data visualization',
      image: [TTT],
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/tictactoe',
      live: 'https://tic-tac-toe332.netlify.app/'
    },
    {
      title: 'color-picker',
      // description: 'Collaborative task management tool with real-time updates',
      image: [clp],
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/color',
      live: 'https://color-picker123.netlify.app/'
    },
    {
      title: 'Form-Validation',
      // description: 'Interactive weather dashboard with data visualization',
      image: [form],
      tags: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/Shuaibahmed9080/registerationvalid',
      live: 'https://regform-valid.netlify.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
  {/* Navigation */}
  <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        
        {/* Logo/Brand */}
        <div className="relative group cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="text-3xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SHUAIB
            </span>
            <span className="text-white font-light">.DEV</span>
          </div>
          {/* Subtle glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 capitalize rounded-full ${
                  activeSection === section
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {section}
                {/* Active indicator dot */}
                {activeSection === section && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              {/* Animated hamburger to X */}
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Navigation - Slide down animation */}
    <div className={`md:hidden overflow-hidden transition-all duration-300 ${
      isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 m-4 rounded-2xl">
        <div className="p-6 space-y-2">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false);
              }}
              className={`group relative w-full text-left px-6 py-4 text-lg font-semibold capitalize rounded-xl transition-all duration-300 ${
                activeSection === section
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <span className="relative z-10">{section}</span>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Active indicator */}
              {activeSection === section && (
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
              )}
            </button>
          ))}
          
          {/* Contact CTA in mobile menu */}
          <div className="pt-4 mt-4 border-t border-white/10">
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[0.98] shadow-lg shadow-blue-500/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 px-4 max-w-7xl w-full">

          {/* Hero Content - Split Layout */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh]">

            {/* Left Side - Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              {/* Floating Badge */}
              <div className="inline-flex items-center px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for work</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
                <div className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    SHUAIB
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10"></div>
                </div>
                <br />
                <span className="text-white font-light">AHMED P</span>
              </h1>

              {/* Subtitle with Animation */}
              <div className="relative mb-12">
                <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                  Frontend Developer & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">UI Designer</span>
                </p>
                <div className="absolute -bottom-2 md:left-0 left-1/2 md:transform-none transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg
                       hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 border-2 border-gray-600 hover:border-white rounded-full font-semibold text-lg
                       backdrop-blur-sm hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
                >
                  Let's Connect
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </button>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
              <div className="relative group">
                {/* Rotating Border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full animate-spin opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Container */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-900 rounded-full p-1 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={front}
                      alt="Shuaib Ahmed P"
                      className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-400 tracking-widest">SCROLL</span>
              <div className="w-0.5 h-12 bg-gradient-to-b from-gray-400 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  ABOUT
                </span>
                <span className="text-white font-light"> ME</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 mt-6 text-lg">Get to know the person behind the code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Image with Enhanced Design */}
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative">
                {/* Floating Background Elements */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                {/* Image Frame */}
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 rounded-3xl backdrop-blur-sm border border-white/10">
                  <div className="bg-gray-900 rounded-[22px] overflow-hidden">
                    <img
                      src={front}
                      alt="Shuaib Ahmed P"
                      className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-60 animate-bounce delay-300"></div>

                {/* Stats Cards */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-4">
                  <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">6+</div>
                    <div className="text-sm text-gray-300">Internship</div>
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 delay-100">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">10+</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Intro */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  I'm a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">passionate developer</span> who loves to create
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Hi, I'm <span className="text-white font-semibold">Shuaib</span>, a passionate frontend developer eager to create seamless and engaging web experiences. As a fresher, I'm constantly learning and exploring new technologies to build clean, responsive, and user-friendly interfaces.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm excited to collaborate, grow, and bring creative ideas to life. Let's connect and build something amazing together!
                </p>
              </div>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "💻", title: "Clean Code", desc: "Writing maintainable & efficient code" },
                  { icon: "🎨", title: "UI/UX Focus", desc: "Creating beautiful user experiences" },
                  { icon: "📱", title: "Responsive", desc: "Mobile-first design approach" },
                  { icon: "🚀", title: "Fast Learning", desc: "Adapting to new technologies quickly" }
                ].map((item, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-blue-500/25"
                >
                  <span className="mr-2">View My Projects</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-gray-600 hover:border-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
              <p className="text-gray-300">
                <span className="text-blue-400 font-semibold">"Code is poetry written in logic"</span> - My development philosophy
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
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5"></div>
  <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="inline-block">
        <h2 className="text-5xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            FEATURED
          </span>
          <br />
          <span className="text-white font-light">PROJECTS</span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
      </div>
      <p className="text-gray-400 mt-6 text-lg">Showcasing my creative development journey</p>
    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:-translate-y-2"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating action buttons on hover */}
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a
                href={project.github}
                className="p-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                title="View Code"
              >
                <Github size={18} />
              </a>
              <a
                href={project.live}
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/25"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Project Number */}
            <div className="absolute top-4 left-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-8">
            {/* Title and Description */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <a
                href={project.github}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 group/link"
              >
                <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                <span className="font-medium">Source Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 px-4 py-2 rounded-full border border-blue-500/30 text-blue-300 hover:text-white transition-all duration-300 group/demo"
              >
                <span className="font-medium">Live Demo</span>
                <ExternalLink size={16} className="group-hover/demo:translate-x-1 group-hover/demo:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Want to see more?
          </span>
        </h3>
        <p className="text-gray-400 mb-6">Check out my GitHub for more projects and contributions</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/yourusername"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <Github size={20} />
            <span>View GitHub Profile</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center space-x-2 border-2 border-gray-600 hover:border-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
          >
            <span>Let's Collaborate</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Contact Section */}
      {/* Contact Section */}
<section id="contact" className="py-20 px-4 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
  <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="inline-block">
        <h2 className="text-5xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            GET IN
          </span>
          <br />
          <span className="text-white font-light">TOUCH</span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
      </div>
      <p className="text-gray-400 mt-6 text-lg">Ready to bring your ideas to life? Let's connect!</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Side - Contact Info */}
      <div className="space-y-8">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-6">
            Let's work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">together</span>
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm always interested in hearing about new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">pshuaib9943@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+91 9943806697</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">Follow me on</p>
            <div className="flex space-x-4">
              <a href="#" className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                <Github className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" size={24} />
              </a>
              <a href="#" className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                <Linkedin className="text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" size={24} />
              </a>
              <a href="#" className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                <Mail className="text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Response Promise */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-green-400 font-semibold">Quick Response Guaranteed</p>
          </div>
          <p className="text-gray-300 text-sm">I typically respond within 24 hours</p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-8 text-center">Send me a message</h3>
        
        <div className="space-y-6">
          <div className="group">
            <label className="block text-gray-400 text-sm mb-2">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-white/20"
            />
          </div>

          <div className="group">
            <label className="block text-gray-400 text-sm mb-2">Your Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-white/20"
            />
          </div>

          <div className="group">
            <label className="block text-gray-400 text-sm mb-2">Your Message</label>
            <textarea
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500 resize-none group-hover:border-white/20"
            ></textarea>
          </div>

          <button
            onClick={() => alert('Message sent! (This is a demo)')}
            className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Send Message</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Decorative Quote */}
    <div className="text-center mt-20">
      <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
        <p className="text-gray-300 text-lg">
          <span className="text-blue-400 font-semibold">"Great things happen when great minds collaborate"</span>
        </p>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="relative py-16 px-4 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Main Footer Content */}
    <div className="grid md:grid-cols-4 gap-12 mb-12">
      
      {/* Brand Section */}
      <div className="md:col-span-2">
        <div className="text-3xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SHUAIB
          </span>
          <span className="text-white font-light">.DEV</span>
        </div>
        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
          Frontend Developer passionate about creating exceptional digital experiences. 
          Let's build something amazing together.
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="#" className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300">
            <Github className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" size={20} />
          </a>
          <a href="#" className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300">
            <Linkedin className="text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" size={20} />
          </a>
          <a href="mailto:pshuaib9943@gmail.com" className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300">
            <Mail className="text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" size={20} />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
        <div className="space-y-3">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="block text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
        <div className="space-y-3 text-gray-400">
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-blue-400" />
            <span className="text-sm">pshuaib9943@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-purple-400" />
            <span className="text-sm">+91 9943806697</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          © 2025 <span className="text-white font-semibold">SHUAIB AHMED</span>. Built with 
          <span className="text-blue-400 mx-1">React</span> and 
          <span className="text-purple-400 mx-1">Tailwind CSS</span>.
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span>Made with</span>
          <div className="flex items-center space-x-1">
            <span className="text-red-400 animate-pulse">♥</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
  );
};

export default Portfolio;