import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from 'figma:asset/d2dd88efd48e5a8a380ce4e037293318a7577ff3.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 mb-6">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-gray-900">
            Harsh<br />Raghuvanshi
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Designer & Developer
          </p>
          <p className="text-gray-600 mb-8 max-w-lg">
            Crafting beautiful, functional, and user-centered digital experiences. 
            I blend creativity with code to bring ideas to life.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Work
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/harshraghuvanshi1312/" className="text-gray-600 hover:text-grey-900 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harshraghuvanshi1312/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:harshraghuvanshi1312@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-3"></div>
              <img
                src={heroImage}
                alt="Harsh Raghuvanshi"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}