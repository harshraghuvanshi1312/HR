import { Menu, X, FileText, Download } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gray-900">HR</div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Get Resume Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://d3s27eh1wskpwv.cloudfront.net/placement/Harsh_Raghuvanshi_cv_3758.pdf"
              download="Harsh_Raghuvanshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative px-5 py-2 border-2 border-[#2c2c2c] bg-[#1a1a1a] text-white text-sm cursor-pointer rounded-3xl transition-all duration-400 ease-in-out outline-none overflow-hidden font-semibold hover:border-[#666666] hover:bg-[#292929] group">
                <span className="relative z-10">Get Resume</span>
                <span className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)] scale-0 transition-transform duration-500 ease-in-out group-hover:scale-[4]"></span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors px-2 rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://d3s27eh1wskpwv.cloudfront.net/placement/Harsh_Raghuvanshi_cv_3758.pdf"
              download="Harsh_Raghuvanshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4"
            >
              <button className="w-full relative px-5 py-2 border-2 border-[#2c2c2c] bg-[#1a1a1a] text-white text-sm cursor-pointer rounded-3xl transition-all duration-400 ease-in-out outline-none overflow-hidden font-semibold">
                Get Resume
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}