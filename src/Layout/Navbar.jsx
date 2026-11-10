
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navlink = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 pointer-events-auto bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          PM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full py-1 px-2 flex items-center gap-1">
            {navlink.map((link, index) => (
              <a
                className="py-2 px-4 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                key={index}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm">
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24}  /> : <Menu size={24} />}
          </button>
      </nav>

        {/* Mobile Menu */}
        { isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
            <div className="container flex mx-auto py-6 px-6 flex-col gap-3">
              {navlink.map((link, index) => (
              <a
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                key={index}
                href={link.href}
              >
                {link.label}
              </a>
              ))}
              <Button>
                Contact Me
              </Button>
            </div>
        </div>)}
    </header>
  );
}

export default Navbar;
