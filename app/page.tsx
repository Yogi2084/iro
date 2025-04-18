// zink-portfolio/app/page.tsx
import { GrResume } from "react-icons/gr";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className=" text-white bg-neutral-900 min-h-screen p-6 md:p-12 space-y-8 rounded-2xl">
   
      <About />
      <Services />
      <Skills />
    </div>
  );
}
