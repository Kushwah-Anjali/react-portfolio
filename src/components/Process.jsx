import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "I start by listening — what you need, who it's for, and what it should do.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "I plan the layout and structure before writing any code.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "I build the website cleanly and responsively, component by component.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "I check across screen sizes and browsers to make sure everything works.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "I hand over the project with clear instructions and stay available for follow-up.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="bg-bg px-4 md:px-12 py-24 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto mb-16">
        <div className="h-px bg-slate-800" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Process"
          title="How I Work"
          subtitle="Simple, clear steps from first conversation to final delivery."
        />

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-cinematic bg-bg border border-slate-800 rounded-xl p-6"
            >
              <p className="font-display text-4xl font-light text-slate-700 mb-4 leading-none">
                {step.number}
              </p>
              <h3 className="text-textPrimary font-medium text-base mb-2">
                {step.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
