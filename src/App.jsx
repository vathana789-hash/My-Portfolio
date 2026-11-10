import Navbar from "@/Layout/Navbar.jsx";
import About from "@/Sections/About.jsx";
import Contact from "@/Sections/Contact.jsx";
import Experience from "@/Sections/Experience.jsx";
import Hero from "@/Sections/Hero.jsx";
import Projects from "@/Sections/Projects.jsx";
import Testimonials from "@/Sections/Testimonials.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;