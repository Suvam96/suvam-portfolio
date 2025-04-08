export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <div className="w-24 h-1 gradient-bg mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-32">Name:</span>
                    <span>Suvam Das</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Date of Birth:</span>
                    <span>28/07/1996</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Experience:</span>
                    <span>Frontend Development</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Email:</span>
                    <span>your.email@example.com</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>HTML & CSS</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="gradient-bg h-2.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>JavaScript</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="gradient-bg h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>React.js</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="gradient-bg h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Bootstrap</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="gradient-bg h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Career Details</h3>
              <p className="text-gray-600 mb-6">
                Experienced Frontend Developer with a demonstrated history of working in the computer
                software industry. Skilled in Responsive Web Design, HTML, CSS, Javascript, React.js,
                Bootstrap, DIGIT.
              </p>
              <p className="text-gray-600 mb-6">
                I create responsive websites that are fast, easy to use, and built with best practices.
                My main area of expertise is front-end development, including HTML, CSS, JS, building
                small and medium web apps, custom plugins, features, animations, and interactive layouts.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="text-4xl font-bold gradient-bg">4+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="text-4xl font-bold gradient-bg">20+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }