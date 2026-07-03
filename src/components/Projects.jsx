import ProjectsData from "./ProjectsData";
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  const showcaseProjects = ProjectsData.filter((p) => p.featured);
  const personalProjects = ProjectsData.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="bg-bg px-4 md:px-12 py-24 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-px bg-slate-800" />
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Work"
          title="Projects"
          subtitle="Website concepts and software development projects."
        />

        {showcaseProjects.length > 0 && (
          <div className="mb-12">
            <p className="text-xs text-textMuted uppercase tracking-cinema mb-6">
              Website Showcase
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {showcaseProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {personalProjects.length > 0 && (
          <div>
            <p className="text-xs text-textMuted uppercase tracking-cinema mb-6">
              Personal Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {personalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 80}
    className="card-cinematic bg-bg border border-slate-800 rounded-lg overflow-hidden flex flex-col h-full"
  >
    <div className="relative h-44 bg-slate-900 overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-700 text-4xl">
          <FaGithub />
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-grow">
      {project.tag && (
        <p className="text-xs text-accent uppercase tracking-cinema font-medium mb-2">
          {project.tag}
        </p>
      )}

      <h3 className="font-display font-medium text-textPrimary text-xl mb-2 leading-snug">
        {project.title}
      </h3>

      <p className="text-textMuted text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-accent rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        {project.code && project.code !== "#" && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-textPrimary px-4 py-2 rounded-md font-medium hover:bg-slate-700 transition text-xs"
          >
            <FaGithub />
            Code
          </a>
        )}

        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-accent text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition text-xs"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}

        {project.docs && (
          <a
            href={project.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-slate-700 text-textMuted px-4 py-2 rounded-md font-medium hover:border-accent hover:text-accent transition text-xs"
          >
            <FaFileAlt />
            Docs
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Projects;
