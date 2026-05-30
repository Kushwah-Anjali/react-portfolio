import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-bg px-4 md:px-12 py-16 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-10 text-center">
          About Me
        </h2>

        <div data-aos="fade-up" className="flex flex-col gap-6">

          {/* Intro card */}
          <div className="bg-bg border border-slate-800 rounded-xl p-6 md:p-8">
            <p className="text-textPrimary text-lg md:text-xl leading-relaxed">
              Frontend Developer specializing in{" "}
              <span className="text-accent font-medium">React.js</span> — with
              full-stack experience shipping real products used by real users.
            </p>
            <p className="text-textMuted text-base md:text-lg leading-relaxed mt-4">
              Built{" "}
              <span className="text-textPrimary font-medium">Eventify</span> — a
              full-stack event platform with AI-generated content, four-tier
              role-based dashboards, and OTP verification. Also built a{" "}
              <span className="text-textPrimary font-medium">
                real-time fleet tracker
              </span>{" "}
              with Google Maps and GraphHopper routing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-bg border border-slate-800 rounded-xl p-5 flex flex-col justify-between gap-3">
              <div>
                <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">
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
                className="flex items-center gap-2 text-xs text-accent hover:opacity-80 transition"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>
            </div>

            <div className="bg-bg border border-slate-800 rounded-xl p-5 flex flex-col justify-between gap-3">
              <div>
                <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">
                  Internship
                </p>
                <p className="text-textPrimary font-medium text-sm mb-1">
                  Developer Trainee
                </p>
                <p className="text-textMuted text-sm">Softcruise Technology</p>
                <p className="text-textMuted text-xs mt-1">Jan – Mar 2026</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1AnUbtMuJXwSqvrMunYG0GrSjJt-DbeX7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-accent hover:opacity-80 transition"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>
            </div>

            <div className="bg-bg border border-slate-800 rounded-xl p-5">
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">
                Education
              </p>
              <p className="text-textPrimary font-medium text-sm mb-1">
                BCA · 77%
              </p>
              <p className="text-textMuted text-sm">
                St. John's College, Agra
              </p>
              <p className="text-textMuted text-xs mt-1">2023 – 2026</p>
              <p className="text-textMuted text-xs mt-1">
                Degree awaited · Results declared
              </p>
            </div>

          </div>

          <div className="bg-bg border border-accent/30 rounded-xl p-5">
            <p className="text-textMuted text-sm md:text-base leading-relaxed">
              <span className="text-accent font-medium">Available — </span>
              Open to frontend / full-stack internships and freelance web
              projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;