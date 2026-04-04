const About = () => {
  return (
    <section
      id="about"
      className="bg-bg px-4 md:px-12 py-16 scroll-mt-16 md:scroll-mt-20"
    >
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto bg-bg border border-slate-800 rounded-xl shadow-lg p-8 md:p-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6 text-center">
          About Me
        </h2>

        <div className="text-textMuted text-base md:text-lg leading-relaxed space-y-5 text-center md:text-left">
          <p>
            I’m{" "}
            <span className="text-textPrimary font-medium">
              Anjali Kushwah
            </span>
            , a developer who builds clean and functional websites for real-world use.
          </p>

          <p>
            I work mainly with JavaScript, React, and modern web tools to create
            responsive and user-friendly web applications.
          </p>

          <p>
            I have completed internships where I worked on real projects like
            event management systems and map-based tracking applications.
          </p>

          <p>
            Currently, I am focused on improving my fundamentals, learning full
            stack development, and working on small real-world websites to gain
            experience.
          </p>

          <p className="text-textPrimary font-medium">
            I am available for freelance website projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;