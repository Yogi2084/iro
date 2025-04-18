// zink-portfolio/app/components/Skills.tsx
const skills = [
    { src: "/icons/python.png", alt: "python" },
    { src: "/icons/Nextjs.png", alt: "Next.js" },
    { src: "/icons/reactjs.jpg", alt: "React.js" },
    { src: "/icons/node.jpg", alt: "Node.js" },
    { src: "/icons/tailwindcss.jpg", alt: "Tailwind css" },
  ];
  
  export default function Skills() {
    return (
      <section>
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex gap-6">
          {skills.map((skill, idx) => (
            <img
              key={idx}
              src={skill.src}
              alt={skill.alt}
              className="w-16 h-16 bg-[#1f1f1f] p-2 rounded-xl"
            />
          ))}
        </div>
      </section>
    );
  }
  