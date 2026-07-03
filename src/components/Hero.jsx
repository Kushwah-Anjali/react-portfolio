const Hero = () => {
  return (
    <section className="bg-bg relative flex items-center px-4 md:px-12 min-h-screen pt-20 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        data-aos="fade-in"
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center py-12"
      >
        {/* LEFT — Text */}
        <div>
          <h1
            className="font-display font-light text-textPrimary leading-none mb-5"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Anjali
            <br />
            Kushwah
          </h1>

          {/* Signature divider line */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="h-px bg-accent flex-shrink-0"
              style={{ width: "3rem" }}
            />
            <p className="text-textMuted text-xs uppercase tracking-cinema">
              Building Modern Business Websites{" "}
            </p>
          </div>

          {/* Hook */}
          <p
            className="text-textPrimary max-w-md mb-3 leading-relaxed font-display font-light"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            Modern, responsive websites built for businesses that want a
            professional online presence.{" "}
          </p>

          <p className="text-textMuted text-sm max-w-md mb-3 leading-relaxed">
            I build responsive websites and web applications using React with a
            focus on clean design, performance, and user experience.
          </p>

          <p className="text-textMuted text-xs max-w-md mb-8 leading-relaxed">
            BCA Graduate · Open to Freelance Projects · Frontend & Full Stack
            Opportunities{" "}
          </p>

          <div className="flex flex-row gap-3">
            <a
              href="#work"
              className="bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-md font-semibold hover:opacity-90 transition text-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-textMuted text-textMuted px-6 py-2.5 md:px-8 md:py-3 rounded-md font-semibold hover:border-accent hover:text-accent transition text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT — Photo + role label below */}
        <div className="flex flex-col items-center gap-4 order-first md:order-last">
          <div className="relative">
            <img
              draggable={false}
              src="/heroimg.jpg"
              alt="Anjali Kushwah"
              className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover"
              style={{ border: "1px solid rgba(148,163,184,0.2)" }}
            />
            <div
              aria-hidden="true"
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-10px",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            />
          </div>

          {/* Blue label below the image */}
          <p className="text-accent text-xs uppercase tracking-cinema font-medium text-center">
            React • Node.js • MongoDB
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <p className="text-textMuted text-xs uppercase tracking-cinema">
          Scroll
        </p>
        <div className="w-px bg-slate-700" style={{ height: "2.5rem" }} />
      </div>
    </section>
  );
};

export default Hero;
