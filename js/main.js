// rainbow text
function splitLetters(el) {
  el.innerHTML = [...el.textContent]
    .map((ch) => (ch === " " ? " " : `<span>${ch}</span>`))
    .join("");
}

document.querySelectorAll(".rainbow-text").forEach(splitLetters);

// khusus navbar: pindah active
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
// js accordian
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
  const icon = accordian.querySelector('#icon');
  const answer = accordian.querySelector('.answer');

  accordian.addEventListener('click', () => {
    if(icon.classList.contains('active')) {
      icon.classList.remove('active');
      answer.style.maxHeight = '';
    } else {
      icon.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  })
})
