document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("href");
      if (!target || target === "#") return;

      e.preventDefault();
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.1)";
    link.style.transition = "0.2s";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    for (let i = 0; i < 5; i++) {
      const sparkle = document.createElement("span");
      sparkle.textContent = "✦";
      sparkle.style.position = "absolute";
      sparkle.style.pointerEvents = "none";
      sparkle.style.left = e.pageX + "px";
      sparkle.style.top = e.pageY + "px";
      sparkle.style.opacity = 1;
      sparkle.style.fontSize = "12px";
      sparkle.style.transition = "transform .6s, opacity .6s";

      document.body.appendChild(sparkle);

      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 30;
      sparkle.style.transform = `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`;
      sparkle.style.opacity = 0;

      setTimeout(() => sparkle.remove(), 600);
    }
  });
});
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Button clicked:", btn.textContent);
    btn.style.animation = "shake .25s";
    setTimeout(() => (btn.style.animation = ""), 250);
  });
});
const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
  @keyframes shake {
    0% { transform: translateX(0) }
    25% { transform: translateX(-4px) }
    50% { transform: translateX(4px) }
    75% { transform: translateX(-4px) }
    100% { transform: translateX(0) }
  }`;
document.head.appendChild(shakeStyle);

const revealStyle = document.createElement("style");
revealStyle.textContent = `
  @keyframes reveal {
    0% {opacity: 0; transform: translateY(40px);}
    100% {opacity: 1; transform: translateY(0);}
  }`;
document.head.appendChild(revealStyle);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "reveal .6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll("section").forEach((sec) => {
  sec.style.opacity = 0;
  observer.observe(sec);
});
document.querySelectorAll("h1, h2, p").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.filter = "contrast(140%) saturate(150%)";
    el.style.transform = "skewX(2deg)";
    el.style.transition = ".2s";
  });
  el.addEventListener("mouseleave", () => {
    el.style.filter = "";
    el.style.transform = "";
  });
});
window.addEventListener("load", () => {
  document.body.classList.add("hero-loaded");
});
document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("fun-text");
  const images = document.querySelectorAll(".fun-img");
  const elements = [text, ...images];

  elements.forEach((el) => {
    el.style.top = Math.random() * 200 + "px";
    el.style.left = Math.random() * 80 + "%";
    el.vx = (Math.random() - 0.5) * 4;
    el.vy = (Math.random() - 0.5) * 4;
    el.style.transition = "none";
  });

  function moveElements() {
    elements.forEach((el) => {
      let top = parseFloat(el.style.top);
      let left = parseFloat(el.style.left);

      top += el.vy;
      left += el.vx;

      if (top < 0 || top > 220) el.vy *= -1;
      if (left < 0 || left > 90) el.vx *= -1;

      el.style.top = top + "px";
      el.style.left = left + "%";
    });
    requestAnimationFrame(moveElements);
  }

  moveElements();
});
const filterButtons = document.querySelectorAll(".filter-btn");
const caseCards = document.querySelectorAll(".case-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    caseCards.forEach((card) => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
