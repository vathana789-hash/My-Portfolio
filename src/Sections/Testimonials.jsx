import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Vathana is a dedicated developer who creates clean, modern, and responsive websites. His attention to detail is impressive.",
    author: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah",
  },

  {
    quote:
      "Working with Vathana was a great experience. He understands modern web technologies and focuses on user experience.",
    author: "James Wilson",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=James",
  },

  {
    quote:
      "Vathana has strong problem-solving skills and a passion for learning. He consistently works to improve his development skills.",
    author: "Emily Johnson",
    role: "Project Manager",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Emily",
  },

  {
    quote:
      "His work demonstrates creativity, consistency, and a good understanding of responsive web design.",
    author: "Daniel Kim",
    role: "Software Engineer",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Daniel",
  },
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length)

    // 0, 1, 2, 3
    // 4
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    // 0, 1, 2, 3
    // 4
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 w-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Sections Header */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Waht People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-dealay-100 text-secondary-foreground">
            Kind words from
            {" "}
            <span className="font-serif italic font-normal text-white">
              Amazing people.
            </span>
          </h2>
        </div>

        {/* Testimorial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimorial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground " />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />

                <div className="flex items-center gap-4">
                  <div className="font-semibold">{testimonials[activeIdx].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="items-center flex justify-center gap-4 mt-8">
              <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 transition-all duration-300 rounded-full ${idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};

export default Testimonials;