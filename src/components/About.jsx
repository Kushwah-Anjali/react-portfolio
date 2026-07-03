import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section
      id="about"
      className="bg-bg px-4 md:px-12 py-24 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto mb-16">
        <div className="h-px bg-slate-800" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="About" title="A Little About Me" />

        <div data-aos="fade-up" className="flex flex-col gap-4">
          <div className="bg-bg border border-slate-800 rounded-xl p-7 md:p-10">
            <p
              className="text-textPrimary leading-relaxed font-display font-light mb-5"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)" }}
            >
              Full Stack Developer with a strong focus on building responsive
              and modern web applications.
            </p>

            <p className="text-textMuted text-sm md:text-base leading-relaxed">
              I'm a BCA graduate with internship experience in full-stack
              development and hands-on experience building websites for
              businesses. I primarily work with React, JavaScript, Tailwind CSS,
              Node.js, Express, and MongoDB. I enjoy creating clean user
              interfaces while continuously strengthening my backend development
              skills through real-world projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card-cinematic bg-bg border border-slate-800 rounded-xl p-5 flex flex-col justify-between gap-3">
              <div>
                <p className="text-xs text-accent uppercase tracking-cinema font-medium mb-3">
                  Internship
                </p>
                <p className="text-textPrimary font-medium text-sm mb-1">
                  Full Stack Developer
                </p>
                <p className="text-textMuted text-sm">Softcruise Technology</p>
                <p className="text-textMuted text-xs mt-1">Jul – Dec 2025</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1GRjdwl1kAf4BKF7BRezRNG-v67BeykrQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-accent hover:opacity-75 transition"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>
            </div>

            <div className="card-cinematic bg-bg border border-slate-800 rounded-xl p-5 flex flex-col justify-between gap-3">
              <div>
                <p className="text-xs text-accent uppercase tracking-cinema font-medium mb-3">
                  Internship
                </p>
                <p className="text-textPrimary font-medium text-sm mb-1">
                  Developer Trainee
                </p>
                <p className="text-textMuted text-sm">Softcruise Technology</p>
                <p className="text-textMuted text-xs mt-1">Jan – Mar 2026</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1AnUbtMuJXwSqvrMunYG0GRjSjJt-DbeX7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-accent hover:opacity-75 transition"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>
            </div>

            <div className="card-cinematic bg-bg border border-slate-800 rounded-xl p-5">
              <p className="text-xs text-accent uppercase tracking-cinema font-medium mb-3">
                Education
              </p>
              <p className="text-textPrimary font-medium text-sm mb-1">
                BCA · 77%
              </p>
              <p className="text-textMuted text-sm">St. John's College, Agra</p>
              <p className="text-textMuted text-xs mt-1">2023 – 2026</p>
              <p className="text-textMuted text-xs mt-1">
                Graduated · Results declared
              </p>
            </div>
          </div>

          <div className="bg-bg border border-accent/25 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-textMuted text-sm md:text-base leading-relaxed">
              <span className="text-accent font-medium">Available — </span>
              Open to freelance web projects, frontend internships, and
              entry-level developer roles.
            </p>
            <a
              href="#contact"
              className="flex-shrink-0 text-xs text-accent uppercase tracking-cinema hover:opacity-75 transition"
            >
              Let's talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
