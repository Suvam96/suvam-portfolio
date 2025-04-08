import { FaDesktop, FaCode, FaMobile, FaPaintBrush } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaDesktop className="text-4xl mb-4 text-blue-600 inline" />,
      title: 'Web Development',
      description:
        'Building responsive and performant websites using modern technologies and best practices.',
    },
    {
      icon: <FaCode className="text-4xl mb-4 text-blue-600 inline" />,
      title: 'Frontend Development',
      description:
        'Creating intuitive and interactive user interfaces with React.js and other modern frameworks.',
    },
    {
      icon: <FaMobile className="text-4xl mb-4 text-blue-600 inline" />,
      title: 'Responsive Design',
      description:
        'Developing websites that work seamlessly across all devices, from mobile to desktop.',
    },
    {
      icon: <FaPaintBrush className="text-4xl mb-4 text-blue-600 inline" />,
      title: 'UI/UX Design',
      description:
        'Designing user-friendly interfaces with focus on usability and aesthetic appeal.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">My Services</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Here are the services I offer to help businesses and individuals establish a strong online
            presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}