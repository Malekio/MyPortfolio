import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="space-y-20">
      <Header />
      
      {/* Boxed sections */}
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <Hero />
      </div>

      {/* About section stretched wider to the edges */}
      <div className="w-[72%] max-w-[1600px] mx-auto px-4">
        <About />
      </div>

      {/* Boxed sections continue */}
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <Projects />
        <Leadership />
        <Hackathons />
        <Certifications />
      </div>
      
      {/* Contact section: Custom wider wrapper (Same as About) */}
      <div className="w-[95%] max-w-[1600px] mx-auto px-4">
        <Contact />
      </div>

    </main>
  );
}