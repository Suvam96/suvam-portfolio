import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Suvam Das</h3>
            <p className="text-gray-300 mt-2">Frontend Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/suvam-das-904954130/" className="text-gray-300 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Suvam96" className="text-gray-300 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/Suvam1996" className="text-gray-300 hover:text-white">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Suvam Das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}