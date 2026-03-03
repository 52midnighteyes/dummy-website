import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_OFFSET = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black px-6 py-4 text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          className="text-left"
          aria-label="Go to hero"
        >
          <h1 className="text-lg font-bold text-yellow-400">
            Jimmy <span className="text-white">"Code"</span> McGill
          </h1>
        </button>

        {/* Desktop */}
        <div className="hidden space-x-6 text-sm font-medium md:flex">
          <button
            type="button"
            onClick={() => scrollToId("aboutme")}
            className="transition-colors duration-200 hover:text-yellow-400"
          >
            About Me
          </button>
          <button
            type="button"
            onClick={() => scrollToId("skill")}
            className="transition-colors duration-200 hover:text-yellow-400"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => scrollToId("project")}
            className="transition-colors duration-200 hover:text-yellow-400"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToId("contactme")}
            className="transition-colors duration-200 hover:text-yellow-400"
          >
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-yellow-400" />
          ) : (
            <Menu className="h-6 w-6 text-yellow-400" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-4 space-y-4 text-center text-sm font-medium md:hidden">
          <button
            type="button"
            onClick={() => scrollToId("aboutme")}
            className="block w-full transition-colors duration-200 hover:text-yellow-400"
          >
            About Me
          </button>
          <button
            type="button"
            onClick={() => scrollToId("skill")}
            className="block w-full transition-colors duration-200 hover:text-yellow-400"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => scrollToId("project")}
            className="block w-full transition-colors duration-200 hover:text-yellow-400"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToId("contactme")}
            className="block w-full transition-colors duration-200 hover:text-yellow-400"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
