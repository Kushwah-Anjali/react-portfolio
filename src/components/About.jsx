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
            <span className="text-textPrimary font-medium">Anjali Kushwah</span>
            , a web developer focused on building clean, responsive, and
            user-friendly web applications. I enjoy working with modern frontend
            technologies and turning ideas into real products.
          </p>

          <p>
            I have hands-on experience with HTML, CSS, JavaScript, React,
            Tailwind CSS, Bootstrap, and GitHub. I focus on writing clean code,
            improving UI/UX, and understanding how things work behind the
            scenes.
          </p>

          <p>
            Along with technical skills, I have intermediate-level English
            communication skills (B1) and an interest in content writing. This
            helps me explain my work clearly, collaborate better, and keep
            improving every day.
          </p>

          <p>
            Currently, I am focused on strengthening my fundamentals, building
            real-world projects, and preparing myself for professional
            opportunities as a frontend developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
