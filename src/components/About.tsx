import { Code, Palette, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative Design',
      description: 'Bringing aesthetic vision to life with user-centered design principles.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimizing every detail for speed, accessibility, and seamless user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate web designer and developer with a love for creating 
            digital experiences that are both beautiful and functional. With expertise 
            in modern web technologies, I transform ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
