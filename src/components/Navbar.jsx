import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu if screen resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-bg border-b border-slate-800 z-50 flex items-center justify-between px-4 md:px-8">
        <div className="text-xl font-semibold">Anjali Kushwah</div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-textMuted">
          <li className="hover:text-textPrimary transition">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-textPrimary transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-textPrimary transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-textPrimary transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* FULL SCREEN RIGHT SLIDE MENU (below top bar) */}
      <div
        className={`fixed md:hidden top-16 right-0 h-[calc(100%-63px)] w-full bg-bg z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Centered links */}
        <ul className="flex flex-col justify-center items-center h-full space-y-8 text-textMuted">
          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-textPrimary text-[20px] "
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-textPrimary text-[20px] "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-textPrimary text-[20px] "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-textPrimary text-[20px] "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="hover:text-textPrimary text-[20px] "
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
