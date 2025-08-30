import { useState , useEffect} from 'react';
import { Menu, X,} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-md shadow-lg bg-opacity-95' : 'bg-transparent'
    }`} style={{
      backgroundColor: isScrolled ? '#353b3c' : 'transparent'
    }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #a2999e, #846a6a)'
              }}
            >
              <span className="text-white font-bold text-lg">MH</span>
            </div>
            <span className="font-semibold text-lg text-white">MUBEEN HUSSAIN</span>
          </div>
          
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="relative text-gray-300 hover:text-white transition-all duration-300 py-2 group font-medium"
                  >
                    {item.label}
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-300 transition-all duration-300 group-hover:w-full"
                      style={{ background: 'linear-gradient(90deg, #a2999e, #846a6a)' }}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`} style={{ backgroundColor: '#353b3c' }}>
          <nav className="px-6 py-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-opacity-20 hover:bg-gray-600 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;