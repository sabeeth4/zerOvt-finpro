// rainbow text
function splitLetters(el) {
  el.innerHTML = [...el.textContent]
    .map((ch) => (ch === " " ? " " : `<span>${ch}</span>`))
    .join("");
}

document.querySelectorAll(".rainbow-text").forEach(splitLetters);

// khusus navbar: pindah active
const navLinkItem = document.querySelectorAll(".nav-link");
navLinkItem.forEach((link) => {
  link.addEventListener("click", () => {
    navLinkItem.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// js accordian
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
  const icon = accordian.querySelector('#arrow');
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

// scroll
gsap.registerPlugin(ScrollTrigger) 
const lenis = new Lenis({
  autoRaf: true,
});
lenis.on("scroll", ScrollTrigger.update);
// gsap(nervousbgt)
gsap.from("#yellow, #pink",{
  duration:1, x:30, y:100, opacity:0
});
gsap.from("#blue",{
  duration:1, x:-70, y:-50, opacity:0
});
gsap.from("#green",{
  duration:1, x:60, y:100, opacity:0
});
gsap.from("#red",{
  duration:1, x:70, y:-40, opacity:0
});
gsap.from("#hero-title", {
  duration:1, scale:0.7, opacity:0
});

// about


