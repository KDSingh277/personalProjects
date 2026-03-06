(() => {
  const root = document.documentElement;
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const THEME_KEY = "ks_portfolio_theme";
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;

  function applyTheme(theme) {
    root.dataset.theme = theme;
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return prefersLight ? "light" : "dark";
  }

  function setTheme(theme) {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  setTheme(getInitialTheme());

  const themeBtn = document.querySelector("[data-theme-toggle]");
  themeBtn?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    setTheme(next);
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks?.dataset.open === "true";
    if (navLinks) navLinks.dataset.open = isOpen ? "false" : "true";
    navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });

  navLinks?.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.tagName.toLowerCase() !== "a") return;
    navLinks.dataset.open = "false";
    navToggle?.setAttribute("aria-expanded", "false");
  });

  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (const a of anchorLinks) {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!(el instanceof HTMLElement)) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    });
  }
})();
