import {  ExternalLink } from 'lucide-react';


const Projects = () => {
  const projects = [
    {
      title: 'E Commerce',
      description: 'Architected a seamless e-commerce platform by implementing key security and performance optimizations, resulting in a reliable and user-friendly shopping experience.',
      image: 'https://res.cloudinary.com/ditmjffe3/image/upload/v1756573307/Screenshot_20250830_202332_t8bhem.png',
      tags: ['JavaScript','React', 'Java','SpringBoot'],
      link: 'https://github.com/siriusb791/ecommerce'
    },
    // {
    //   title: 'Wilsonport',
    //   description: 'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.',
    //   image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80',
    //   tags: ['React', 'SASS', 'JavaScript', 'PHP'],
    //   link: '#'
    // },
    // {
    //   title: 'Boreal Coffee Clone',
    //   description: 'I re-created the frontend of Boreal Coffee\'s official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.',
    //   image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    //   tags: ['React', 'CSS', 'JavaScript', 'HTML'],
    //   link: '#'
    // },
    // {
    //   title: 'Crown Template',
    //   description: 'Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.',
    //   image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    //   tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    //   link: '#'
    // }
    
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#353b3c' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#eef0f2' }}>
            Projects
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#c6c7c4' }}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''} group`}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="text-3xl font-bold" style={{ color: '#eef0f2' }}>{project.title}</h3>
                <p className="leading-relaxed text-lg" style={{ color: '#c6c7c4' }}>{project.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 rounded-lg text-sm font-medium"
                      style={{
                        backgroundColor: 'rgba(162, 153, 158, 0.2)',
                        color: '#a2999e',
                        border: '1px solid rgba(162, 153, 158, 0.3)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-block px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #a2999e, #846a6a)',
                    boxShadow: '0 4px 20px rgba(162, 153, 158, 0.3)'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;