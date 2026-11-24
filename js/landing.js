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
const pill = gsap.timeline({
  opacity:0,
  duration:2,
  ScrollTrigger: {
    trigger: "#about",
    start:"top",
    end:"+-1500",
    scrub:true,
    pin:true
  },
});
pill 
.from("#mood-pill", {
  opacity:0, y:85, scale:0.8
})
.from("#thoughts-pill", {
  opacity:0, y:85, scale:0.8
})
.from("#noise-pill", {
  opacity:0, y:85, scale:0.8
})
.from("#pace-pill", {
  opacity:0, y:85, scale:0.8
});


