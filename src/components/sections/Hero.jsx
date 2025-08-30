import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Youtube, BookOpen } from 'lucide-react';


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/siriusb79', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, href: 'https://x.com/MubeenHuss83579?t=oN5mKQiSFkBnzKibBi9Ogg&s=08', label: 'Twitter' },
    { icon: <Youtube size={24} />, href: 'https://youtube.com/@zenithzephyr-q2s', label: 'YouTube' },
    { icon: <Github size={24} />, href: 'https://github.com/siriusb791', label: 'GitHub' },
    { icon: <BookOpen size={24} />, href: 'https://dev.to/mubeen_hussain_b24a32bdec', label: 'Blog' }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(135deg, #353b3c 0%, #846a6a 50%, #a2999e 100%)'
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl transition-transform duration-1000 ease-out opacity-30"
          style={{
            background: 'radial-gradient(circle, #a2999e, transparent)',
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 rounded-full blur-2xl transition-transform duration-700 ease-out opacity-20"
          style={{
            background: 'radial-gradient(circle, #846a6a, transparent)',
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 items-center text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ color: '#eef0f2' }}>
              Hey, I'm{' '}
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r"
                style={{
                  background: 'linear-gradient(45deg, #eef0f2, #c6c7c4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Hussain
              </span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#c6c7c4' }}>
             Result-oriented Full-Stack Developer with a passion for building and managing web applications that drive the success of the overall product.
            </p>
            
            <div className="pt-8">
              <a 
                href="#projects" 
                className="inline-block px-10 py-4 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #a2999e, #846a6a)',
                  boxShadow: '0 8px 30px rgba(162, 153, 158, 0.3)'
                }}
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Vertical */}
      <div className="absolute  left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg"
            style={{ 
              backgroundColor: 'rgba(238, 240, 242, 0.1)',
              color: '#c6c7c4',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(45deg, #a2999e, #846a6a)';
              e.target.style.color = '#eef0f2';
              e.target.style.boxShadow = '0 8px 25px rgba(162, 153, 158, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(238, 240, 242, 0.1)';
              e.target.style.background = 'rgba(238, 240, 242, 0.1)';
              e.target.style.color = '#c6c7c4';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-6 h-10 border-2 rounded-full flex justify-center opacity-80"
          style={{ borderColor: '#c6c7c4' }}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ backgroundColor: '#c6c7c4' }}
          ></div>
        </div>
      </div>
    </section>
  );
};


export default Hero;