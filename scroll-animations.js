(function () {
  const selector = [
    ".about-avatar-wrap",
    ".about-content",
    ".skills-title",
    ".skill-card",
    ".projects-title",
    ".project-card",
    ".achievements-title",
    ".achievement-card",
    ".contact-title",
    ".contact-sub",
    ".contact-panel",
  ].join(",");

  const targets = document.querySelectorAll(selector);
  if (!targets.length) return;

  targets.forEach((el) => el.classList.add("scroll-animate"));

  targets.forEach((el) => {
    const parent = el.parentElement;
    if (
      !parent ||
      !(
        parent.classList.contains("skills-grid") ||
        parent.classList.contains("projects-grid") ||
        parent.classList.contains("achievements-grid")
      )
    ) {
      return;
    }

    const siblings = [...parent.children].filter((child) =>
      child.classList.contains("scroll-animate")
    );
    const siblingIndex = siblings.indexOf(el);
    if (siblingIndex > 0) {
      el.style.setProperty(
        "--scroll-delay",
        `${Math.min(siblingIndex * 0.1, 0.4)}s`
      );
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  targets.forEach((el) => observer.observe(el));
})();
