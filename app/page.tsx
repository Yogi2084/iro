// zink-portfolio/app/page.tsx
import { GrResume } from "react-icons/gr";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="space-y-10 rounded-2xl" >
      <About />
      <Services />
      <Skills />
    </div>
  );
}
