const navbarHTML = `
<header class="navbar">
    <a href="index.html#home" class="nav-logo">
        <img src="assets/logo.png" alt="zerOvt logo">
        <span>zerOvt</span>
    </a>

    <nav class="nav-links">
        <a class="nav-link rainbow-nav" href="index.html#home">home</a>
        <a class="nav-link rainbow-nav" href="index.html#about">about</a>
        <a class="nav-link rainbow-nav" href="index.html#features">feature</a>
        <a class="nav-link rainbow-nav" href="index.html#faq">FAQ</a>
    </nav>

    <a href="index.html#about" class="nav-cta">get started</a>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("navbar");
    if (!container) return; // halaman ini nggak punya <div id="navbar">

    container.innerHTML = navbarHTML;

    const links = container.querySelectorAll(".nav-link");

    // bungkus tiap huruf pakai span (buat efek warna rainbow)
    links.forEach((link) => {
        link.innerHTML = [...link.textContent]
            .map((ch) => `<span>${ch}</span>`)
            .join("");
    });

    // tandai link yang aktif
    function setActive() {
        const page = location.pathname.split("/").pop() || "index.html";
        const hash = location.hash || "#home";

        links.forEach((link) => {
            const [linkPage, linkHash] = link.getAttribute("href").split("#");
            const isActive =
                page === linkPage && hash === "#" + linkHash;
            link.classList.toggle("active", isActive);
        });
    }

    setActive();
    window.addEventListener("hashchange", setActive);
});
