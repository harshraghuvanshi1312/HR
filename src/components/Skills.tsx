export function Skills() {
  const skillCategories = [
    {
      category: 'Design',
      skills: ['UI/UX Design', 'Figma', 'Canva', 'Responsive Design'],
    },
    {
      category: 'Frontend',
      skills: ['JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      category: 'Development Tools',
      skills: ['WordPress', 'Flutter'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Responsive Testing'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl mb-4 text-gray-900">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}