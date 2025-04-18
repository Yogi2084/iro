// app/resume/page.tsx

export default function resume() {
  return (
    <section className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-accent">Resume</h1>
      <p className="text-gray-300">
        Download my resume below or view a summary of my qualifications.
      </p>
      
      <a
        href="/YOGANANDA_KS_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-accent text-black font-semibold rounded hover:bg-accent/90 transition"
      >
        Download Resume (PDF)
      </a>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Siddaganga Institute of Technology – BE in Information Science (2025)</li>
          <li>Govt Polytechnic Tumakuru – Diploma in Computer Science (2019)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Skills</h2>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Languages: C, Python, C++</li>
          <li>Web: HTML, CSS</li>
          <li>Databases: SQL</li>
          <li>Tools: Eclipse, VS Code</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Projects</h2>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Potato Plant Disease Detection – ML/DL project analyzing soil pathogens.</li>
        </ul>
      </div>
    </section>
  );
}
