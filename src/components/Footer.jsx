import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-bg border-t border-slate-800 py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col gap-10">
        {/* CTA — cinematic large text */}
        <div className="text-center">
          <p className="text-accent text-xs uppercase tracking-cinema font-medium mb-6">
            Contact
          </p>
          <h3
            className="font-display font-light text-textPrimary mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Have a website idea?
          </h3>
          <p className="text-textMuted text-sm md:text-base mb-8 max-w-sm mx-auto leading-relaxed">
            I'm available for freelance projects and frontend internships. Let's
            talk about what you're building.
          </p>
          <a
            href="mailto:anjalikushwah8163@gmail.com"
            className="inline-block bg-accent text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition text-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div>
            <p className="font-display text-textPrimary text-lg font-light">
              Anjali Kushwah
            </p>
            <p className="text-textMuted text-xs mt-1 uppercase tracking-cinema">
              Frontend Developer · React
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:anjalikushwah8163@gmail.com"
              className="flex items-center gap-2 text-textMuted hover:text-accent transition text-sm"
            >
              <FaEnvelope className="text-base" />
              anjalikushwah8163@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-kushwah-6384b5308/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-textMuted hover:text-blue-400 transition text-sm"
            >
              <FaLinkedin className="text-base" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Kushwah-Anjali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-textMuted hover:text-textPrimary transition text-sm"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
          </div>
        </div>

        <p className="text-xs text-textMuted opacity-40">
          © {new Date().getFullYear()} Anjali Kushwah. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="
    ml-auto
    w-12
    h-12
    flex
    items-center
    justify-center
    rounded-full
    border
    border-slate-700
    text-textMuted
    hover:border-accent
    hover:text-accent
    transition-all
    duration-300
  "
        >
          <FaArrowUp className="text-lg" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
