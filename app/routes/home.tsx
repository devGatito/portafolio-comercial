import AboutUs from "~/components/sections/AboutUs";
import Contact from "~/components/sections/Contact";
import FAQ from "~/components/sections/FAQ";
import Hero from "~/components/sections/Hero";
import OurProcess from "~/components/sections/OurProcess";
import Projects from "~/components/sections/Projects";
import Services from "~/components/sections/Services";




export default function Home() {
  return (
    <>
    

      <main>
        <Hero />
         <AboutUs />
           <OurProcess />
        
        <FAQ />
        <Contact/>

         {/* <Projects/> */}
        
       
       
       
       
       {/* Manifesto Section */}
      </main>

      
    </>
  );
}