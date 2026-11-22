const navbarEl = document.getElementById("navbar");
const variant = navbarEl.dataset.variant; // "landing" atau "feature"

// button beda
const buttons = {
  landing: `<a href="mood.html" class="nav-cta">Get started</a>`,
  feature: `<a href="index.html" class="nav-cta">Back to home</a>`,
};

const pages = [
  { name: "Home", href: "index.html", match: ["index.html"] },
  { name: "About", href: "index.html#about", match: [] },
  { name: "Feature", href: "mood.html", match: ["mood.html", "noise.html", "thoughts.html", "pace.html"] },
  { name: "FAQ", href: "index.html#faq", match: [] },
];

const current = location.pathname.split("/").pop() || "index.html";
const hash = location.hash;

const links = pages
  .map((p) => {
    let isActive = false;

    if (p.name === "Home") isActive = current === "index.html" && !hash;
    else if (p.name === "About") isActive = current === "index.html" && hash === "#about";
    else if (p.name === "FAQ") isActive = current === "index.html" && hash === "#faq";
    else isActive = p.match.includes(current); // Feature

    const text = isActive
      ? [...p.name].map((c) => `<span>${c}</span>`).join("")
      : p.name;

    return `<li><a href="${p.href}" class="nav-link ${isActive ? "rainbow-nav active" : ""}">${text}</a></li>`;
  })
  .join("");
navbarEl.innerHTML = `
  <nav class="navbar">
    <a href="index.html" class="nav-logo">
      <img src="assets/logo.png" alt="">
      zerOvt
    </a>
    <ul class="nav-links">${links}</ul>
    ${buttons[variant] || ""}
  </nav>
`;