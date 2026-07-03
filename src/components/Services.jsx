import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Business Websites",
    description:
      "Responsive websites for local businesses and startups that need a clean online presence.",
  },
  {
    title: "Restaurant Websites",
    description:
      "Menu, gallery, contact, and location pages designed for food businesses and hospitality.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused, fast-loading pages built to present a product, service, or offer clearly.",
  },
  {
    title: "Website Updates",
    description:
      "Updating existing websites — content changes, UI improvements, and WordPress edits.",
  },
  {
    title: "Responsive UI",
    description:
      "Frontend interfaces that look and work well on mobile, tablet, and desktop.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-bg px-4 md:px-12 py-24 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto mb-16">
        <div className="h-px bg-slate-800" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title="What I Can Build"
          subtitle="Clean, focused websites delivered with care."
        />

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="card-cinematic bg-bg border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-textPrimary font-medium text-base mb-2">
                {service.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
