import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Website',
      category: 'Web Development',
      link: '#',
    },
    {
      title: 'Portfolio Template',
      category: 'Frontend',
      link: '#',
    },
    {
      title: 'Admin Dashboard',
      category: 'React.js',
      link: '#',
    },
    {
      title: 'Landing Page',
      category: 'UI/UX Design',
      link: '#',
    },
    {
      title: 'Mobile App UI',
      category: 'App Design',
      link: '#',
    },
    {
      title: 'Blog Website',
      category: 'Web Development',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">My Portfolio</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Here are some of my recent projects. Each project represents my passion for creating
            beautiful and functional web experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                {/* Using SVG as placeholder instead of copyrighted images */}
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5h16v14H4V5zm15 13V6H5v12h14zm-3-7H8v-1h8v1zm0 2H8v-1h8v1zm0 2H8v-1h8v1z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="gradient-bg text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-4">{project.title}</h3>
                <Link
                  href={project.link}
                  className="gradient-bg font-medium hover:text-blue-800 transition duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
