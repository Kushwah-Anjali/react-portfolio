const projects = [
  // Placeholder projects, you can replace later
  {
    title: "Project One",
    description: "Short description about your project goes here.",
    image: "", // upload later
    tech: ["React", "Tailwind", "JavaScript"],
    demo: "#",
    code: "#",
  },
  {
    title: "Project Two",
    description: "Short description about your project goes here.",
    image: "",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    code: "#",
  },
  {
    title: "Project Three",
    description: "Short description about your project goes here.",
    image: "",
    tech: ["React", "Bootstrap"],
    demo: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-bg px-4 md:px-12 py-16 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-10 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-bg border border-slate-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* IMAGE placeholder */}
              <div className="w-full h-48 bg-slate-700 flex items-center justify-center text-white">
                Image Placeholder
              </div>

              {/* PROJECT CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">
                  {project.title}
                </h3>
                <p className="text-textMuted mb-4">{project.description}</p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-slate-800 text-textMuted text-sm px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="bg-accent text-white px-4 py-2 rounded font-semibold hover:opacity-90 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    className="border border-textMuted text-textMuted px-4 py-2 rounded font-semibold hover:border-accent hover:text-accent transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
