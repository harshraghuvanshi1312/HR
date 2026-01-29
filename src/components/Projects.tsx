import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hrBgeImage from 'figma:asset/618fab53a3394059dadf9fb0384ef39b9528a964.png';
import workflowImage from 'figma:asset/c2c112a7f47d95e0faff3e373933721709882a03.png';

export function Projects() {
  const projects = [
    {
      title: 'Balaji Global Exports',
      description: 'A clean and customized website created to highlight cattle feed products and meet client requirements.',
      image: hrBgeImage,
      tags: ['WordPress', 'Elementor', 'Custom CSS', 'SEO Optimized'],
      live: 'https://balajiglobalexports.com',
    },
    {
      title: 'LinkedIn AutoPOST',
      description: 'An automated workflow that streamlines LinkedIn posting using n8n, ensuring consistent and efficient content sharing',
      image: workflowImage,
      tags: ['n8n', 'Automation', 'API Integration'],
      github: 'https://github.com/harshraghuvanshi1312/n8n-linkedin-post-automation',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of recent work showcasing my skills in design and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}