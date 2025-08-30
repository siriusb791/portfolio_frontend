import { Github, Linkedin, Twitter, Youtube, BookOpen} from 'lucide-react';


const Footer = () => {
 
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/siriusb79', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, href: 'https://x.com/MubeenHuss83579?t=oN5mKQiSFkBnzKibBi9Ogg&s=08', label: 'Twitter' },
    { icon: <Youtube size={24} />, href: 'https://youtube.com/@zenithzephyr-q2s', label: 'YouTube' },
    { icon: <Github size={24} />, href: 'https://github.com/siriusb791', label: 'GitHub' },
    { icon: <BookOpen size={24} />, href: 'https://dev.to/mubeen_hussain_b24a32bdec', label: 'Blog' }
  ];


  return (
    <footer className="py-16" style={{ backgroundColor: '#353b3c' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: '#eef0f2' }}>Social</h2>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-md"
                  style={{ 
                    backgroundColor: 'rgba(238, 240, 242, 0.1)',
                    color: '#c6c7c4'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #a2999e, #846a6a)';
                    e.target.style.color = '#eef0f2';
                    e.target.style.boxShadow = '0 8px 25px rgba(162, 153, 158, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(238, 240, 242, 0.1)';
                    e.target.style.background = 'rgba(238, 240, 242, 0.1)';
                    e.target.style.color = '#c6c7c4';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: '#eef0f2' }}>Mubeen H</h2>
            <p className="leading-relaxed" style={{ color: '#c6c7c4' }}>
              A Backend focused Web Developer building the Backend of Websites
              and Web Applications that leads to the success of the overall product
            </p>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8" style={{ borderColor: 'rgba(198, 199, 196, 0.2)' }}>
          <div className="text-center" style={{ color: '#c6c7c4' }}>
            <p>
              © Copyright {new Date().getFullYear()}. Made by{' '}
              <a 
                href="https://johndoe.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:underline transition-colors duration-200"
                style={{ color: '#a2999e' }}
                onMouseEnter={(e) => e.target.style.color = '#eef0f2'}
                onMouseLeave={(e) => e.target.style.color = '#a2999e'}
              >
                Mubeen H
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;