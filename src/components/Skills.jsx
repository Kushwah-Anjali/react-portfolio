import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiVercel } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 90, icon: <FaHtml5 className="text-orange-500" />, category: "Frontend" },
  { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-500" />, category: "Frontend" },
  { name: "JavaScript", level: 78, icon: <FaJs className="text-yellow-400" />, category: "Frontend" },
  { name: "React.js", level: 82, icon: <FaReact className="text-cyan-400" />, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-sky-400" />, category: "Frontend" },
  { name: "Bootstrap", level: 75, icon: <FaBootstrap className="text-purple-500" />, category: "Frontend" },

  { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500" />, category: "Backend" },
  { name: "Express.js", level: 68, icon: <SiExpress className="text-gray-300" />, category: "Backend" },

  { name: "MySQL", level: 72, icon: <SiMysql className="text-blue-400" />, category: "Database" },

  { name: "Git", level: 75, icon: <FaGitAlt className="text-red-500" />, category: "Tools" },
  { name: "GitHub", level: 78, icon: <FaGithub className="text-gray-300" />, category: "Tools" },
  { name: "Vercel", level: 55, icon: <SiVercel className="text-white" />, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Database", "Tools"];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-bg px-4 md:px-12 py-16 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-10 text-center">
          Skills
        </h2>

        <div data-aos="fade-up" className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                {category}
              </h3>

              {/* DESKTOP GRID */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                  ))}
              </div>

              {/* MOBILE HORIZONTAL SCROLL */}
              <div className="flex md:hidden gap-4 overflow-x-auto py-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => (
                    <div key={index} className="min-w-[180px] flex-shrink-0">
                      <SkillCard skill={skill} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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