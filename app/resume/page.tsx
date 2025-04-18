'use client';

import { FaGraduationCap, FaBriefcase, FaCertificate, FaDownload } from 'react-icons/fa';

export default function resume() {
  return (
    <section className="text-white bg-neutral-900 min-h-screen p-6 md:p-12 space-y-8 rounded-2xl">
      <h1 className="text-4xl font-bold">Resume</h1>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FaGraduationCap /> Education
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <p className="font-bold">Siddaganga Institute of Technology</p>
            <p>Bachelor of Engineering in Information Science</p>
            <p className="text-sm text-gray-400">CGPA: 7.76 (Expected 2025)</p>
          </li>
          <li>
            <p className="font-bold">Government Polytechnic, Tumakuru</p>
            <p>Diploma in Computer Science Engineering</p>
            <p className="text-sm text-gray-400">71% (2016 - 2019)</p>
          </li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🛠 Technical Skills
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
          <li>Languages: C, C++, Python</li>
          <li>Web: HTML, CSS</li>
          <li>CS Fundamentals: SQL, Computer Networks</li>
          <li>Tools: Eclipse, VS Code</li>
        </ul>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🧠 Projects
        </h2>
        <div className="mt-2 text-gray-300">
          <p className="font-bold">Potato Plant Disease Detection</p>
          <p>
            Built a machine learning system for early disease detection in potato plants by analyzing soil pathogens. Focused on accuracy, speed, and scalability.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FaCertificate /> Certifications
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
          <li>DSA in C++ – GeeksforGeeks</li>
          <li>Introduction to Networks – CCNA</li>
          <li>Switching, Routing, Wireless Essentials – CCNA</li>
        </ul>
      </div>

      {/* Extra Activities */}
      <div>
        <h2 className="text-2xl font-semibold flex items-center gap-2">🎯 Extra-Curricular</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Youth for Seva volunteer</li>
          <li>District-level Kabaddi (2015)</li>
        </ul>
      </div>

      {/* Download Resume */}
      <div className="pt-6">
        <a
          href="/yogi.pdf"
          download
          className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 transition"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </section>
  );
}
