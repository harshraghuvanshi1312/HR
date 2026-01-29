import { Award, ExternalLink } from 'lucide-react';

export function Certificates() {
  const certificates = [
    {
      title: 'Supercharge Your Productivity with AI',
      issuer: 'IIDE',
      date: 'January 2026',
      link: 'https://drive.google.com/file/d/1qs27v1LyIxrc6GWkJWNXjQuKlCmnhG8S/view?usp=drive_link',
    },
    {
      title: 'Build a Full Website Using WordPress',
      issuer: 'Coursera',
      date: 'January 2026',
      link: 'https://drive.google.com/file/d/1OrNEeG_SaNOcVfYqXjH2itiMgVaKSyUU/view?usp=drive_link',
    },
    {
      title: '5-Day AI Agents Intensive Course',
      issuer: 'Kaggle',
      date: 'November 2025',
      link: 'https://drive.google.com/file/d/1ZMzdBTDVs8mN4odgHKrZTnEl41GwZar2/view?usp=drive_link',
    },
    {
      title: 'Cybersecurity Masterclass',
      issuer: 'SecureEyes',
      date: 'July 2025',
      link: 'https://drive.google.com/file/d/1IuFuP5gDcPCeFSZYG1DaP0bSUVIyZLNk/view?usp=drive_link',
    },
    {
      title: 'Data Analytics & Visualization Job Simulation',
      issuer: 'Accenture Forage',
      date: 'October 2024',
      link: 'https://drive.google.com/file/d/1yhnceZDMH7likGrRG72DQvxJ580Rif7B/view?usp=drive_link',
    },
    {
      title: 'IT–ITeS Sector (Level 2)',
      issuer: 'NASSCOM',
      date: 'March 2021',
      link: 'https://drive.google.com/file/d/1gP6jDYCCnlCsv_SelDYcq0W3yIjlTwIr/view?usp=drive_link',
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Certificates & Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development through various courses and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg flex-shrink-0">
                  <Award size={24} />
                </div>
                <ExternalLink 
                  size={20} 
                  className="text-gray-400 group-hover:text-gray-900 transition-colors"
                />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-medium">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
