import React from "react";

const Page = () => {
  

  return (
    <div className="space-y-32">
      {/* Section 1: Profile Section */}
      <section
        id="section1"
        className="h-screen flex flex-col items-center justify-center bg-blue-100 bg-fixed bg-cover"
        style={{ backgroundImage: 'url(/images/background3.jpg)' }}
      >
        <div className="text-center space-y-6">
          <div className="mt-8 mb-6">
            <img
              src="/images/pic.jpg"
              alt="Suhaim Manna"
              className="w-52 h-52 rounded-full object-cover shadow-lg mx-auto transition-transform duration-500 hover:scale-105"
              style={{ objectPosition: "top 25%" }}
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-white transition-all ease-in-out duration-500">
              Suhaim Manna
            </h1>
            <p className="text-xl text-gray-300 mt-2">
              Software Engineer | Web Developer | Tech Enthusiast
            </p>
            <p className="mt-4 text-lg text-gray-200 px-4 md:px-0">
              Hello! I'm a passionate software developer with a keen interest in building innovative and user-friendly web applications.
            </p>

            <div className="mt-6 space-y-4 text-lg text-gray-300">
              <p><strong>Email:</strong> suhaimmanna99@gmail.com</p>
              <p><strong>Phone:</strong> +91 9363151710</p>
              <p><strong>Location:</strong> Bangalore, India</p>
            </div>

            <div className="mt-6 flex justify-center space-x-6">
              <a href="https://linkedin.com/in/suhaim-manna" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors ease-in-out duration-300">LinkedIn</a>
              <a href="https://github.com/Suhaimz11" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100 transition-colors ease-in-out duration-300">GitHub</a>
              <a href="https://twitter.com/Suhaimz11" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors ease-in-out duration-300">Twitter</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Skills and Expertise */}
      <section
        id="section2"
        className="h-screen flex flex-col items-center justify-center bg-blue-50 transition-all ease-in-out duration-1000"
      >
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Skills & Expertise</h2>
          <p className="text-xl text-gray-700">Technologies I work with and tools I use</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-4">
            <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900">Frontend Development</h3>
              <ul className="mt-4 text-lg text-gray-700 space-y-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900">Backend Development</h3>
              <ul className="mt-4 text-lg text-gray-700 space-y-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>API Development</li>
                <li>Firebase</li>
                <li>Docker</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900">Cloud Technologies</h3>
              <ul className="mt-4 text-lg text-gray-700 space-y-2">
                <li>AWS</li>
                <li>Google Cloud</li>
                <li>Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Internships and Achievements */}
      <section
        id="section3"
        className="h-screen flex flex-col items-center justify-center bg-blue-50 transition-all ease-in-out duration-1000"
      >
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Internships</h2>
          <ul className="text-xl text-gray-700 space-y-2 mt-4">
            <li>Interned at SmartKnower - Machine Learning</li>
            <li>Interned at Internshala - Web Development</li>
            <li>Interned at Unified Mentor - Data Analyst</li>
          </ul>

          <h2 className="text-4xl font-bold text-gray-900 mt-16">Achievements</h2>
          <ul className="text-xl text-gray-700 space-y-2 mt-4">
            <li>IAYP Bronze Award</li>
            <li>BEC Preliminary by Cambridge</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;