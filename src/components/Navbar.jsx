import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 h-20 z-50 flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${
          scrolled ? "bg-bg border-b border-slate-800" : "bg-transparent"
        }`}
      >
        <a
          href="#"
          className="font-display font-light text-textPrimary text-xl tracking-wide"
        >
          Anjali Kushwah
        </a>

        <button
          className="md:hidden text-xl text-textMuted"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-textMuted text-xs uppercase tracking-cinema hover:text-textPrimary transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`fixed md:hidden top-20 right-0 h-[calc(100%-80px)] w-full bg-bg z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col justify-center items-center h-full gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display font-light text-textPrimary text-3xl hover:text-accent transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
