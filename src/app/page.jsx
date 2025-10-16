import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full mt-8 lg:w-[90%] mx-auto">
       <main>
         <HeroSection/>
         <About/>
         <Projects/>
         <Services/>
         <ContactSection/>
       </main>
    </div>
  );
}
