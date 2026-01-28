// Main JS for site functionality - rewritten for reliability
(function () {
  "use strict";

  // Translations configuration
  const translations = {
    sv: {
      "nav.home": "Hem",
      "nav.work": "Arbete",
      "nav.about": "Om mig",
      "nav.contact": "Kontakt",
      "hero.title": "Nisse Lindberg",
      "hero.subtitle":
        "Jag är Nisse - en UX Designer som förenklar komplexitet och levererar effektiva lösningar. Kreativa processer är min största passion.",
      "hero.cv": "Ladda ned CV",
      "hero.email": "Skicka E-post",
      "work.title": "Min expertis",
      "work.desc":
        "Jag specialiserar mig på att skapa användarcentrerade designer som förbättrar användarupplevelsen och ökar engagemanget. Mina färdigheter inkluderar användarforskning, wireframing, prototypering och användbarhetstest.",
      "case.btn": "Utforska Case",
      "case.role": "Roll",
      "case.tools": "Verktyg",
      "case.year": "År",
      "case.overview": "Översikt",
      "case.challenge": "Utmaning",
      "case.solution": "Lösning",
      "case.process": "Process",
      "case.process_text":
        "Här kan du beskriva din arbetsprocess, från research till färdig design.",
      "case.gallery": "Galleri",
      "case.back": "Tillbaka till portfolio",
      "case1.title": "Club AFRY Sharepoint",
      "case1.desc": "Sharepoint Redesign | AFRY Praktik",
      "case1.overview_text":
        "Under min praktik på AFRY arbetade jag med att designa om deras interna Sharepoint-sidor för att förbättra användarvänligheten och informationsstrukturen.",
      "case1.challenge_text":
        "Den befintliga lösningen var svårnavigerad och medarbetarna hade svårt att hitta relevant information snabbt.",
      "case1.solution_text":
        "Jag tog fram en ny struktur och design som testades med användare och implementerades, vilket resulterade i en mer intuitiv upplevelse.",
      "case2.title": "ForestKIT",
      "case2.desc": "ForestKIT | AFRY Praktik",
      "case2.overview_text":
        "ForestKIT är ett verktyg för skogsägare. Jag hjälpte till att förbättra UX-designen för kartverktyget.",
      "case2.challenge_text":
        "Användarna upplevde kartfunktionen som komplex och svår att använda på mobila enheter.",
      "case2.solution_text":
        "Genom att förenkla gränssnittet och tydliggöra funktionerna skapade vi en smidigare upplevelse för fältarbete.",
      "case3.title": "Aireal Solutions",
      "case3.desc": "Logo Design & UI Design | Elva Group",
      "case3.overview_text":
        "Ett uppdrag för Elva Group som innefattade framtagning av ny logotyp och UI-design för deras digitala närvaro.",
      "case3.challenge_text":
        "Företaget saknade en tydlig visuell identitet som speglade deras moderna arbetssätt.",
      "case3.solution_text":
        "Jag skapade en stilren och modern visuell identitet samt UI-komponenter för deras webb.",
      "case4.title": "Klädbutiken",
      "case4.desc": "Hemsida, App & Skärm | Skolprojekt 2025",
      "case4.overview_text":
        "Ett skolprojekt där jag designade en e-handel för en klädbutik med fokus på en sömlös köpupplevelse.",
      "case4.challenge_text":
        "Målet var att minska antalet steg i kassan och göra det enklare för kunder att filtrera produkter.",
      "case4.solution_text":
        "Resultatet blev en responsiv webbdesign och app-prototyp med fokus på tydlig navigation och snabb checkout.",
      "case5.title": "Closely",
      "case5.desc": "Social Media App | Skolprojekt 2025",
      "case5.overview_text":
        "Design av en ny sociala medier-app fokuserad på lokala communities och evenemang.",
      "case5.challenge_text":
        "Att skapa en plattform som uppmuntrar till fysiska möten snarare än bara digital interaktion.",
      "case5.solution_text":
        "En app som lyfter fram lokala händelser och gör det enkelt att skapa och gå med i grupper baserat på intressen.",
      "case6.title": "Minska Svinn",
      "case6.desc": "Minska svinn & Hållbarhet | UX Research",
      "case6.overview_text":
        "Ett forskningsprojekt kring hur digitala verktyg kan hjälpa hushåll att minska sitt matsvinn.",
      "case6.challenge_text":
        "Många vill minska sitt svinn men saknar verktyg för att hålla koll på vad som finns hemma.",
      "case6.solution_text":
        "Ett koncept för en app som hjälper användare att spåra utgångsdatum och föreslår recept baserat på vad som finns i kylen.",
      "about.title": "Om mig",
      "about.text":
        "Hej! Jag heter Nisse Lindberg och läser mitt andra år för att bli UX Designer på IT-Högskolan. Kreativa processer är en av mina största passioner i livet. Jag gillar att tackla utmaningar och samarbeta med andra för att skapa effektiva lösningar. Jag designar med syfte, alltid med användaren i åtanke för att skapa intuitiva och meningsfulla upplevelser.",
      "about.services": "Tjänster:",
      "about.service1": "Användarforskning",
      "about.service2": "Användbarhetstest",
      "about.service3": "Wireframing",
      "about.service4": "Prototypering",
      "about.service5": "Tillgänglig Design",
      "about.personal": "Personligt:",
      "about.personal_text":
        "Jag är 44 år gammal förälder till små barn och tidigare musikant från Göteborg. Jag älskar att träna, resa och spela musik. Musik är en viktig del av mitt liv.",
      "about.caption":
        "På min fritid älskar jag att spela musik, träna och umgås med familjen.",
      "about.btn": "Kontakta mig",
      "contact.title": "Kontakta mig",
      "contact.intro": "Tveka inte att mejla eller ringa mig!",
      "contact.email": "E-post:",
      "contact.phone": "Telefon:",
      "contact.btn": "Skicka E-post",
    },
    en: {
      "nav.home": "Home",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "hero.title": "Nisse Lindberg",
      "hero.subtitle":
        "I'm Nisse - a UX Designer simplifying complexity and delivering effective solutions. Creative processes are my greatest passion.",
      "hero.cv": "Download CV",
      "hero.email": "Send Email",
      "work.title": "My Expertise",
      "work.desc":
        "I specialize in creating user-centered designs that improve user experience and increase engagement. My skills include user research, wireframing, prototyping, and usability testing.",
      "case.btn": "Explore Case",
      "case.role": "Role",
      "case.tools": "Tools",
      "case.year": "Year",
      "case.overview": "Overview",
      "case.challenge": "Challenge",
      "case.solution": "Solution",
      "case.process": "Process",
      "case.process_text":
        "Here you can describe your work process, from research to final design.",
      "case.gallery": "Gallery",
      "case.back": "Back to Portfolio",
      "case1.title": "Club AFRY Sharepoint",
      "case1.desc": "Sharepoint Redesign | AFRY Internship",
      "case1.overview_text":
        "During my internship at AFRY, I worked on redesigning their internal Sharepoint pages to improve usability and information structure.",
      "case1.challenge_text":
        "The existing solution was difficult to navigate, and employees struggled to find relevant information quickly.",
      "case1.solution_text":
        "I developed a new structure and design that was user-tested and implemented, resulting in a more intuitive experience.",
      "case2.title": "ForestKIT",
      "case2.desc": "ForestKIT | AFRY Internship",
      "case2.overview_text":
        "ForestKIT is a tool for forest owners. I helped improve the UX design for the mapping tool.",
      "case2.challenge_text":
        "Users found the map function complex and difficult to use on mobile devices.",
      "case2.solution_text":
        "By simplifying the interface and clarifying functions, we created a smoother experience for field work.",
      "case3.title": "Aireal Solutions",
      "case3.desc": "Logo Design & UI Design | Elva Group",
      "case3.overview_text":
        "An assignment for Elva Group involving the creation of a new logo and UI design for their digital presence.",
      "case3.challenge_text":
        "The company lacked a clear visual identity that reflected their modern way of working.",
      "case3.solution_text":
        "I created a clean and modern visual identity as well as UI components for their web platform.",
      "case4.title": "The Clothing Store",
      "case4.desc": "Website, App & Screen | School Project 2025",
      "case4.overview_text":
        "A school project where I designed an e-commerce site for a clothing store with a focus on a seamless shopping experience.",
      "case4.challenge_text":
        "The goal was to reduce the number of steps in the checkout process and make it easier for customers to filter products.",
      "case4.solution_text":
        "The result was a responsive web design and app prototype focusing on clear navigation and fast checkout.",
      "case5.title": "Closely",
      "case5.desc": "Social Media App | School Project 2025",
      "case5.overview_text":
        "Design of a new social media app focused on local communities and events.",
      "case5.challenge_text":
        "To create a platform that encourages physical meetings rather than just digital interaction.",
      "case5.solution_text":
        "An app that highlights local events and makes it easy to create and join groups based on interests.",
      "case6.title": "Reduce Waste",
      "case6.desc": "Reduce Waste & Sustainability | UX Research",
      "case6.overview_text":
        "A research project on how digital tools can help households reduce their food waste.",
      "case6.challenge_text":
        "Many people want to reduce waste but lack tools to keep track of what they have at home.",
      "case6.solution_text":
        "A concept for an app that helps users track expiration dates and suggests recipes based on what's in the fridge.",
      "about.title": "About Me",
      "about.text":
        "Hi! I'm Nisse Lindberg, a second-year UX Design student at IT-Högskolan. Creative processes are one of my greatest passions in life. I enjoy tackling challenges and collaborating with others to create effective solutions. I design with purpose, always keeping the user in mind to create intuitive and meaningful experiences.",
      "about.services": "Services:",
      "about.service1": "User Research",
      "about.service2": "Usability Testing",
      "about.service3": "Wireframing",
      "about.service4": "Prototyping",
      "about.service5": "Accessible Design",
      "about.personal": "Personal:",
      "about.personal_text":
        "I am a 44-year-old parent of small children and a former musician from Gothenburg. I love working out, traveling, and playing music. Music is an important part of my life.",
      "about.caption":
        "In my spare time, I love playing music, working out, and spending time with my family.",
      "about.btn": "Contact Me",
      "contact.title": "Contact Me",
      "contact.intro": "Don't hesitate to email or call me!",
      "contact.email": "Email:",
      "contact.phone": "Phone:",
      "contact.btn": "Send Email",
    },
  };

  let currentLang = localStorage.getItem("lang") || "sv";

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

  function updateLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update button text
    const langBtnText = document.querySelector(".lang-text");
    if (langBtnText) {
      langBtnText.textContent = lang.toUpperCase();
    }

    // Save preference
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    currentLang = lang;
  }

  function initLanguageToggle() {
    const langBtn = document.querySelector(".lang-toggle");
    if (!langBtn) return;

    // Set initial language
    updateLanguage(currentLang);

    langBtn.addEventListener("click", () => {
      const newLang = currentLang === "sv" ? "en" : "sv";
      updateLanguage(newLang);
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
    initLanguageToggle();
    initLazyLoading();
    initKeyboardNav();
  });

  // Small helpers exposed for debugging
  window.__site = { setTheme, updateActiveNav };
})();
