import Hero from "~/components/sections/Hero";
import Manifesto from "~/components/sections/Manifesto";
import Projects from "~/components/sections/Projects";
import Services from "~/components/sections/Services";




export default function Home() {
  return (
    <>
    

      <main>
        <Hero />
        <Services />
        <Projects />
       {/* Manifesto Section */}
      </main>

      
    </>
  );
}