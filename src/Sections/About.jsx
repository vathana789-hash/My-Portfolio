
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
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Main Grid */}
        <div className="grid min-[900px]:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8 max-w-2xl">

            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animate-fade-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}one component at a time.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-base leading-7 text-muted-foreground animate-fade-in animate-fade-200">
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

            {/* Mission Card */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-fade-300">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                "My mission is to turn creative ideas into meaningful digital
                experiences through clean code, modern design, and continuous learning."
              </p>

              <span className="block mt-4 text-sm text-primary font-medium">
                — My Mission
              </span>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/40 transition-all duration-300"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
