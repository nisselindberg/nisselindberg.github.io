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
    // Removed inline style manipulation - CSS handles hover effects
    // This prevents conflicts with CSS transitions
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

  function initLazyLoading() {
    // Native lazy loading is handled by the browser via loading="lazy" attribute
    // This function is kept for potential future enhancements
    if (!("IntersectionObserver" in window)) return;

    // Only handle images with data-src attribute (for custom lazy loading)
    const imgs = document.querySelectorAll("img[data-src]");
    if (imgs.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            }
            img.classList.add("loaded");
            io.unobserve(img);
          }
        });
      },
      { rootMargin: "100px" },
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

  function initCaseCardLinks() {
    document.querySelectorAll(".case-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        // Don't trigger if a link inside the card was already clicked
        if (e.target.tagName === "A") {
          return;
        }
        const link = card.querySelector("a.case-btn");
        if (link && link.href) {
          window.location.href = link.href;
        }
      });
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
    if (saved) setTheme(saved);
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
    prefersDark.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme"))
        setTheme(e.matches ? "dark" : "light");
    });
  }

  function initLenis() {
    // Check if Lenis is loaded
    if (typeof Lenis === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to AOS to ensure animations trigger correctly during smooth scroll
    // Note: AOS usually works fine on its own, but sometimes needs a refresh
    // on scroll if using a virtual scroller. Lenis is native-friendly so it usually just works.
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLenis(); // Initialize smooth scroll first
    initSmoothScroll();
    initNavHoverEffect();
    initSparkleEffect();
    initButtonClickEffect();
    initCaseCardLinks();
    initThemeToggle();
    initLazyLoading();
    initKeyboardNav();
  });

  // Small helpers exposed for debugging
  window.__site = { setTheme, updateActiveNav };
})();
