import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400" /> },
  { name: "React", level: 50, icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Tailwind CSS",
    level: 70,
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  { name: "Git", level: 50, icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "Bootstrap",
    level: 75,
    icon: <FaBootstrap className="text-purple-500" />,
  },
  { name: "GitHub", level: 75, icon: <FaGithub className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-bg px-4 md:px-12 py-16 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-10 text-center ">
          Skills
        </h2>

        {/* DESKTOP GRID */}
        <div data-aos="fade-up" className="hidden md:grid grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* MOBILE HORIZONTAL SCROLL */}
      <div  data-aos="fade-left" className="flex md:hidden gap-4 overflow-x-auto py-2">
          {skills.map((skill, index) => (
            <div key={index} className="min-w-[180px] flex-shrink-0">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SINGLE SKILL CARD
const SkillCard = ({ skill }) => (
  <div className="bg-bg border border-slate-800 rounded-lg p-4 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3 text-textPrimary text-lg font-medium">
        <span className="text-2xl">{skill.icon}</span>
        {skill.name}
      </div>
      <span className="text-sm text-textMuted">{skill.level}%</span>
    </div>

    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-accent rounded-full"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export default Skills;
