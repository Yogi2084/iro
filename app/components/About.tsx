// zink-portfolio/app/components/About.tsx
// app/components/About.tsx

export default function About() {
  return (
    <section id="about" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          {"I’m a passionate "}
          <span className="font-semibold text-white">Fullstack Developer</span>
          {
            " with strong experience across both front-end and back-end technologies. I love creating smooth, user-friendly interfaces, building scalable backend systems, and connecting everything with clean, efficient APIs to power modern web apps."
          }
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-2">
          {
            "With a solid background in C++, responsive design, and full-stack architecture, I thrive on transforming complex ideas into elegant, functional digital solutions."
          }
        </p>
        <p className="text-blue-400 font-medium text-lg mt-4">
          {"🚀 Let’s bring your vision to life with code!"}
        </p>
      </div>
    </section>
  );
}
