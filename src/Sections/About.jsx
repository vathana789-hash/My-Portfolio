
import { Code2, Rocket, Lightbulb, Globe } from "lucide-react";


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable, and scalable code for reliable applications.",
  },

  {
    icon: Rocket,
    title: "High Performance",
    description:
      "Building fast and responsive websites with smooth user experiences.",
  },

  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "Turning creative ideas into practical and modern digital solutions.",
  },

  {
    icon: Globe,
    title: "Responsive Design",
    description:
      "Creating websites that work smoothly across desktop, tablet, and mobile.",
  },
];


export const About = () => {
  return(

  <section id="about" className="py-32 relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Colunm */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
          </div>
        
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
          </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
             <p>
                I'm a passionate frontend developer who enjoys turning creative
                ideas into modern digital experiences. I love exploring new
                technologies, solving problems, and building websites that
                are both beautiful and easy to use.
              </p>

              <p>
                I'm a dedicated developer with a strong interest in web
                development and technology. I enjoy creating clean designs,
                writing maintainable code, and transforming complex ideas
                into simple and effective solutions.
              </p>

              <p>
                My journey in software development is driven by curiosity
                and a passion for continuous learning. I focus on improving
                my skills in React, JavaScript, and modern web technologies
                while building responsive and user-friendly applications.
              </p>


          </div>

          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-fade-300">
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to turn creative ideas into meaningful digital
              experiences through clean code, modern design, and continuous learning."
            </p>

            <span className="block mt-4 text-sm text-primary font-medium">
               — My Mission
            </span>
            
          </div>
        </div>
        {/* Right Colunm - Highlight*/}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{animationDelay: `${(idx + 1) * 100}ms`}}
              >
                
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
  );
};

export default About;