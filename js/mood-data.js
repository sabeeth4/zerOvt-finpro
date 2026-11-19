const cards = document.querySelectorAll(".mood-card");

const moodPopups = {
  overthinking: {
    text: "Your brain is doing way too much rn, and you’ve survived 100% of your worst-case scenarios. Let’s clear the clutter.",
    char: "assets/Overthinking.png",
  },
  heavy: {
    text: "Showing up today was already a win. Drop your shoulders and let yourself just exist for a bit.",
    char: "assets/Heavy.png",
  },
  overwhelm: {
    text: "Too much on your plate doesn’t mean you’re failing—you’re just human. One tiny step at a time, you’ve got this.",
    char: "assets/Overwhelm.png",
  },
  anxious: {
    text: "This shaky feeling is temporary, and you’re way stronger than whatever’s stressing you out rn.",
    char: "assets/Anxious.png",
  },
  calm: {
    text: "Love seeing you in your chill era. Let’s bottle up this exact energy for louder days.",
    char: "assets/Calm.png",
  },
};

const detik = 8;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const data = moodPopups[card.dataset.mood];

    // tandai kartu yang aktif
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    Swal.fire({
      html: `
        <button class="go-home" id="goHome" data-go="index.html">go home rn</button>

        <p class="pop-text">${data.text}</p>

        <p class="pop-label">choose zero-tivies!</p>

        <div class="zero-btns">
          <button class="zero-btn pace" data-go="pace.html">Zero<br>Pace</button>
          <button class="zero-btn thoughts" data-go="thoughts.html">Zero<br>Thoughts</button>
          <button class="zero-btn noise" data-go="noise.html">Zero<br>Noise</button>
        </div>

        <img class="pop-mascot" src="${data.char}" alt="">
      `,
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: detik * 1000,
      customClass: { popup: "zero-popup", htmlContainer: "zero-html" },
      didOpen: (popup) => {
        popup.addEventListener("click", (e) => {
          const btn = e.target.closest("[data-go]");
          if (btn) {
            window.location.href = btn.dataset.go;
          }
        });
      },
    }).then((result) => {
      // klo ga milih auto direct ke pace
      if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href = "pace.html";
      }
    });
  });
});