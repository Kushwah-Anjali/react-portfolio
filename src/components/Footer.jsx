import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-bg border-t border-slate-800 py-10">
      <div className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col gap-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

    
          <div>
            <p className="text-textPrimary font-medium text-base">
              Anjali Kushwah
            </p>
            <p className="text-textMuted text-sm mt-1">
              Frontend Developer · React.js
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

    
        <p className="text-xs text-textMuted opacity-50">
          © {new Date().getFullYear()} Anjali Kushwah. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;