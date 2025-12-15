// Main JS for site functionality - rewritten for reliability
(function () {
  "use strict";

  function initSmoothScroll() {
    // Handle both in-page anchors (`#id`) and same-page links like
    // `index.html#about`. Only smooth-scroll for links that point to the
    // current document (same pathname or a pure hash).
    document.querySelectorAll('a[href*="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href) return;

        let hash = "";
        if (href.startsWith("#")) {
          hash = href;
        } else {
          // Try to parse and only handle if the link points to the same page
          try {
            const url = new URL(href, location.href);
            if (url.pathname === location.pathname && url.hash) {
              hash = url.hash;
            } else {
              return; // external or different page — don't intercept
            }
          } catch (err) {
            return;
          }
        }

        if (!hash || hash === "#") return;
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          updateActiveNav(hash);
        }
      });
    });
  }

  function updateActiveNav(currentSection) {
    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
      const href = link.getAttribute("href") || "";
      // Normalize by extracting the hash from the link (if present) and
      // comparing against the provided currentSection (which should be a
      // hash like `#about`). This handles `index.html#about`, `./#about`
      // and plain `#about` variants.
      try {
        let linkHash = "";
        if (href.startsWith("#")) linkHash = href;
        else {
          const url = new URL(href, location.href);
          linkHash = url.hash || "";
        }

        if (linkHash && currentSection && linkHash === currentSection) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      } catch (err) {
        // If URL parsing fails, fall back to exact compare
        if (href === currentSection) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      }
    });
  }

  function initNavHoverEffect() {
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener(
        "mouseenter",
        () => (link.style.transform = "scale(1.03)")
      );
      link.addEventListener("mouseleave", () => (link.style.transform = ""));
    });
  }

  function createSparkle(x, y) {
    const sparkle = document.createElement("span");
    sparkle.textContent = "✦";
    sparkle.style.position = "fixed";
    sparkle.style.pointerEvents = "none";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    sparkle.style.opacity = 1;
    sparkle.style.fontSize = "12px";
    sparkle.style.transition = "transform 0.6s, opacity 0.6s";
    sparkle.style.zIndex = "9999";
    document.body.appendChild(sparkle);

    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 40;
    sparkle.style.transform = `translate(${Math.cos(angle) * distance}px, ${
      Math.sin(angle) * distance
    }px)`;
    sparkle.style.opacity = 0;
    setTimeout(() => sparkle.remove(), 700);
  }

  function initSparkleEffect() {
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        for (let i = 0; i < 3; i++) createSparkle(e.pageX, e.pageY);
      });
    });
  }

  function initButtonClickEffect() {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.style.animation = "shake 0.25s";
        setTimeout(() => (btn.style.animation = ""), 250);
      });
    });
  }

  function initSectionReveal() {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "reveal 0.6s ease forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("section").forEach((sec) => {
      sec.style.opacity = 0;
      observer.observe(sec);
    });
  }

  function setTheme(theme) {
    const html = document.documentElement;
    const toggle = document.querySelector(".theme-toggle");
    html.setAttribute("data-theme", theme);
    if (toggle) {
      const icon = toggle.querySelector(".theme-icon");
      if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
    const meta = document.querySelector("meta[name=theme-color]");
    if (meta)
      meta.setAttribute("content", theme === "dark" ? "#1a1a1a" : "#ffffff");
    localStorage.setItem("theme", theme);
  }

  function initThemeToggle() {
    const toggle = document.querySelector(".theme-toggle");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const saved = localStorage.getItem("theme");
    // Only apply a theme automatically if the user has explicitly saved a preference.
    // Otherwise, leave defaults in CSS untouched so the site appearance doesn't change unexpectedly.
    if (saved) setTheme(saved);

    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });

    prefersDark.addEventListener("change", (e) => {
      const savedNow = localStorage.getItem("theme");
      if (!savedNow) {
        // Only respond to system changes when there is no saved preference
        setTheme(e.matches ? "dark" : "light");
      }
    });
  }

  function initLazyLoading() {
    if (!("IntersectionObserver" in window)) return;
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            img.classList.add("loaded");
            io.unobserve(img);
          }
        });
      },
      { rootMargin: "100px" }
    );
    imgs.forEach((i) => io.observe(i));
  }

  function initKeyboardNav() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab" && e.ctrlKey) {
        const main = document.getElementById("main-content");
        if (main) {
          main.setAttribute("tabindex", "-1");
          main.focus();
          main.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }


  document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initNavHoverEffect();
    initSparkleEffect();
    initButtonClickEffect();
    initSectionReveal();
    initThemeToggle();
    initLazyLoading();
    initKeyboardNav();
  });

  // Small helpers exposed for debugging
  window.__site = { setTheme, updateActiveNav };
})();
