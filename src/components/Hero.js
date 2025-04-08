import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="gradient-bg text-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Suvam Das</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frontend Developer</h2>
            <p className="text-lg mb-8">
              Crafting beautiful and responsive web experiences with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-white gradient-bg font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Contact Me
              </Link>
              <Link
                href="/#portfolio"
                className="bg-transparent border-2 border-white text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:gradient-bg transition duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 bg-white rounded-full overflow-hidden shadow-lg">
              {/* Using a placeholder image with no copyright issues */}
              <img src="/images/profile.jpg" alt="Profile" width="200" height="200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}