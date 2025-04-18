// app/components/Projects.tsx

export default function Projects() {
    return (
      <section id="projects" className="space-y-8">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Early Disease Detection in Potato Plant</h3>
            <p className="text-gray-300">
              Developed a user-friendly interface using <span className="font-medium text-white">Python</span> and <span className="font-medium text-white">Streamlit</span> to detect
             disease from uploaded images.
            </p>
          </div>
  
          <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">LPG Leakage Detection 🚨</h3>
            <p className="text-gray-300">
              Implemented a real-time LPG leakage detection system using <span className="font-medium text-white">MQ-5</span> sensor and <span className="font-medium text-white">Arduino</span>,
              with an alert system for safety measures.
            </p>
          </div>
  
          
  
          <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Movie DBMS</h3>
            <p className="text-gray-300">
              Built a <span className="font-medium text-white">RESTful API</span> for managing 
              movie data using <span className="font-medium text-white">Node.js</span> and <span className="font-medium text-white">Express.js</span>, allowing users to search, add, and update movie information.
            </p>
          </div>
  
          <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Hacker News Clone</h3>
            <p className="text-gray-300">
              Built a fully functional clone of the popular Hacker News platform with real-time post feeds, upvotes, and comments 
              using <span className="font-medium text-white">Next.js</span>, <span className="font-medium text-white">Tailwind CSS</span>, and 
              <span className="font-medium text-white"> Firebase</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }
  