import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-bg border-t border-slate-800 py-10">
      <div className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: copyright */}
        <span className="text-textMuted text-sm md:text-base text-center md:text-left">
          © {new Date().getFullYear()} Anjali Kushwah.
        </span>

        {/* Right side: contact links with icons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-textMuted text-sm md:text-base text-center sm:text-left">
            Contact Me:
          </span>

          <div className="flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:anjalikushwah6163@gmail.com"
              className="text-textPrimary font-medium hover:text-accent transition flex items-center gap-1"
            >
             anjalikushwah6163@gmail.com
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anjali-kushwah-6384b5308/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 transition text-2xl"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-black transition text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
