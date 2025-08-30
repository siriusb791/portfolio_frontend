const About = () => {
  const skills = [
    "Java", "Spring Boot",  "TailwindCSS", "JavaScript", "React", "Node.js", "Python", "GIT",  "Responsive Design",
     "Terminal", "PostgreSQL", "MongoDB", "MySQL", "AWS", "Docker", "Postman", "Redis"
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#eef0f2' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#353b3c' }}>
            About Me
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#846a6a' }}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#353b3c' }}>Get to know me!</h3>
            <div className="space-y-4 leading-relaxed" style={{ color: '#846a6a' }}>

                <p>
                    I'm a <strong style={{color: "#353b3c"}}>Full-Stack Developer</strong> with strong proficiency in Java and React. 
                    My expertise lies in building scalable backends with Spring Boot and creating dynamic frontends. 
                    Check out some of my work in the <strong style={{color: "#353b3c"}}>Projects</strong> section.
                    </p>
                    <p>
                        I also like building and deploying full-stack projects to simulate industry-standard workflows. 
                        I contribute to open-source on GitHub, where I collaborate with other developers and 
                        enhance my skills in version control and software development. Feel free to Connect or 
                        Follow me on my social platforms where I post useful content related to Web Development and Programming.
                        </p>
                        <p>
                            I'm open to <strong style={{color: "#353b3c"}}>Job</strong> opportunities where I can apply my skills in AWS, PostgreSQL, and MongoDB 
                            to contribute, learn, and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to  
                            <strong style={{color: "#353b3c"}}> contact</strong> me.
                            </p>
              
              
            </div>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-6"
              style={{
                background: 'linear-gradient(45deg, #a2999e, #846a6a)',
                boxShadow: '0 4px 20px rgba(162, 153, 158, 0.3)'
              }}
            >
              Contact
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#353b3c' }}>My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border font-medium"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#353b3c',
                    borderColor: '#c6c7c4',
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#a2999e';
                    e.target.style.backgroundColor = 'rgba(162, 153, 158, 0.1)';
                    e.target.style.transform = 'scale(1.05) translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#c6c7c4';
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.transform = 'scale(1) translateY(0)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;