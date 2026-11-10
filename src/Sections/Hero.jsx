
import Button from "@/components/Button";
import {
  ArrowRight,
  Code2,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const Hero = () => {
  return (
    <section className="flex items-center min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/projects/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background via-background/80" />
      </div>

      {/* Green Dots */}
      <div className="absolute overflow-hidden inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 animate-slow-drift"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer + React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-fade-100">
                Crafting{" "}
                <span className="text-primary glass-text">
                  digital
                </span>
                <br />
                Experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-fade-200">
                Hi, I'm Em Tithsovathana — a developer specializing in
                React, Next.js, and JavaScript. I build scalable,
                high-performance web applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-fade-300">
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animate-fade-400">
              <span className="text-sm text-muted-foreground">
                Follow me:
              </span>

              {[
                { icon: Code2, href: "#", label: "Code" },
                { icon: BriefcaseBusiness, href: "#", label: "LinkedIn" },
                { icon: Globe, href: "#", label: "Twitter" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animate-fade-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/profile-photo.jpg"
                  alt="Profile"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 p-3 animate-float">
                  <div className="flex gap-3">
                    <div/>
                    <span>Available for work</span>
                  </div>
                </div>
                {/* Sates Badge */}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
