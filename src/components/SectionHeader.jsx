const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="mb-12 text-center">
    <p className="text-accent text-xs uppercase tracking-cinema font-medium mb-4">
      {eyebrow}
    </p>
    <h2
      className="font-display font-light text-textPrimary leading-tight"
      style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="text-textMuted text-sm mt-4 max-w-md mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
