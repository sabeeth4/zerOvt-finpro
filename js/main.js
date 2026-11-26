// rainbow text
  function splitLetters(el) {
    el.innerHTML = [...el.textContent]
      .map((ch) => (ch === " " ? " " : `<span>${ch}</span>`))
      .join("");
  }
  document.querySelectorAll(".rainbow-text").forEach(splitLetters);