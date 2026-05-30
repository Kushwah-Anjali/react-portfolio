import projectsData from "./projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-bg px-4 md:px-12 py-16 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-10 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-bg border border-slate-800 rounded-lg shadow-lg overflow-hidden hover:border-accent transition-all duration-300 flex flex-col h-full"
  >
    {/* PROJECT IMAGE */}
    <div className="relative h-48 bg-slate-800 overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-textMuted text-4xl">
          <FaGithub />
        </div>
      )}
    </div>

    {/* PROJECT CONTENT */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-textPrimary mb-3">
        {project.title}
      </h3>

      <p className="text-textMuted text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium bg-slate-800 text-accent rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-textPrimary px-4 py-2 rounded-md font-medium hover:bg-slate-700 transition"
        >
          <FaGithub />
          Code
        </a>

        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-accent text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Projects;