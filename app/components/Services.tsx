// zink-portfolio/app/components/Services.tsx
const services = [
    { title: "C++ Developer", desc: "Proficient in C++", icon: "🌐" },
    { title: "Web Development", desc: "Professional level sites", icon: "💻" },
    { title: "Frontend Design", desc: "Responsive and interactive", icon: "🎨" },
    { title: "Backend Development", desc: "Scalable and seamless", icon: "🛠️" },
  ];
  
  export default function Services() {
    return (
      <section>
        <h2 className="text-2xl font-semibold mb-4">What I am Doing</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div key={i} className="bg-[#1f1f1f] p-4 rounded-xl shadow-md">
              <div className="text-yellow-400 text-xl mb-2">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  