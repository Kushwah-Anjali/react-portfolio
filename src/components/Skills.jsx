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
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiVscodium,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "VS Code", icon: <SiVscodium className="text-blue-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-bg px-4 md:px-12 py-24 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto mb-16">
        <div className="h-px bg-slate-800" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies"
          subtitle="Tools I use to build websites and applications."
        />

        <div data-aos="fade-up" className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs text-textMuted uppercase tracking-cinema mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="card-cinematic bg-bg border border-slate-800 rounded-lg px-4 py-3 flex items-center gap-3"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-textPrimary text-sm font-medium">
                      {skill.name}
                    </span>
                    {skill.note && (
                      <span className="text-xs text-textMuted border border-slate-700 rounded-full px-2 py-0.5">
                        {skill.note}
                      </span>
                    )}
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

export default Skills;
