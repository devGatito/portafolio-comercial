import { Navbar } from "~/components/layout/Navbar";

import { Hero } from "~/components/sections/Hero";
import { Problems } from "~/components/sections/Problems";
import { Services } from "~/components/sections/Services";
import { BusinessCases } from "~/components/sections/BusinessCases";
import { Process } from "~/components/sections/Process";
import { About } from "~/components/sections/About";
import { Contact } from "~/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
         <Process />
        <Problems />
        <Services />
       {/*  <BusinessCases /> */}
       
        <About />
        <Contact />
      </main>

      
    </>
  );
}