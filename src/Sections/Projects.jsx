
const projects = [
  {
    title: "Fintech Dashboard",
    description: "A modern financial dashboard for tracking income, expenses, and transactions.",
    image: "/projects/project1.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  
  {
    title: "E-Commerce Website",
    description: "A responsive online shopping platform with product listings and cart functionality.",
    image: "/projects/project2.jpg",
    tags: ["React", "API", "Tailwind CSS"],
    link: "#",
    github: "#",
  },

  {
    title: "Movie Discovery App",
    description: "A movie application for searching films and exploring movie details.",
    image: "/projects/project3.jpg",
    tags: ["React", "TMDB API", "JavaScript"],
    link: "#",
    github: "#",
  },

  {
    title: "Personal Portfolio",
    description: "A modern portfolio showcasing my skills, projects, and experience.",
    image: "/projects/project4.jpg",
    tags: ["React", "Vite", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="project" className="py-24 lg:py-32 relative overflow-hidden">
    {/* background-glow */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Sections header */}
      <div className="text-center m-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Feature Work
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Projects that
          <span className="font-serif italic font-normal text-white">
            {" "}
            make an impact.
          </span>
        </h2>

        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          A Selection of my recent work, from complex web applications to
          immovative tools that solve real-world problem.
        </p>
      </div>
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />  
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
};

export default Projects;