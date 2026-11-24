(() => {
  // rainbow text
  function splitLetters(el) {
    el.innerHTML = [...el.textContent]
      .map((ch) => (ch === " " ? " " : `<span>${ch}</span>`))
      .join("");
  }
  document.querySelectorAll(".rainbow-text").forEach(splitLetters);

  // navbar active
  const navLinkItem = document.querySelectorAll(".nav-link");
  navLinkItem.forEach((link) => {
    link.addEventListener("click", () => {
      navLinkItem.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // accordion
  document.querySelectorAll(".accordian").forEach((accordian) => {
    const icon = accordian.querySelector(".question i");
    const answer = accordian.querySelector(".answer");
    accordian.addEventListener("click", () => {
      const open = icon.classList.toggle("active");
      answer.style.maxHeight = open ? answer.scrollHeight + "px" : "";
    });
  });
})();