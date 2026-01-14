const Hero = () => {
  return (
    <section className="bg-bg flex items-center px-4 md:px-12 pt-32 md:pt-0 md:min-h-[calc(100vh-64px)]">
      <div
        data-aos="fade-in"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* IMAGE — top on mobile, left on desktop */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            draggable={false}
            src="./public/heroimg.jpg"
            alt="Anjali Kushwah"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border border-gray-700"
          />
        </div>

        {/* CONTENT — below image on mobile, right on desktop */}
        <div className="text-center md:text-left">
          <h1 className=" text-3xl md:text-6xl font-bold text-textPrimary mb-4">
            Anjali Kushwah
          </h1>

          <h2 className="text-accent text-xl md:text-2xl font-medium mb-6">
            Web Developer
          </h2>

          <p className="text-textMuted text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8">
            I build clean, responsive, and user-focused web applications using
            modern web technologies.
          </p>

          <div className="flex flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-accent text-white px-5 py-2 md:px-7 md:py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-textMuted text-textMuted px-5 py-2 md:px-7 md:py-3 rounded-md font-semibold hover:border-accent hover:text-accent transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
