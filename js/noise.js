// noise.js - putar / jeda audio di halaman Audio Corner
// Tiap kartu (.audio-card) punya <audio> dan tombol sendiri.
// Hanya satu audio yang jalan pada satu waktu.

const cards = document.querySelectorAll('.audio-card');

// teks tombol (ganti di sini kalau mau tulisan lain)
const LABEL_START = 'Start audio';
const LABEL_PAUSE = 'Pause audio';

function setPlaying(card, isPlaying) {
  const button = card.querySelector('.btn-audio');
  const label  = card.querySelector('.btn-label');
  const icon   = card.querySelector('.icon-play');

  button.classList.toggle('is-playing', isPlaying);
  label.textContent = isPlaying ? LABEL_PAUSE : LABEL_START;

  // OPSIONAL: ganti ikon jadi pause. Hanya jalan kalau <img class="icon-play">
  // punya atribut data-play-src="assets/Play.png" dan data-pause-src="assets/Pause.png".
  if (icon && icon.dataset.pauseSrc && icon.dataset.playSrc) {
    icon.src = isPlaying ? icon.dataset.pauseSrc : icon.dataset.playSrc;
  }
}

function stopAll(exceptCard) {
  cards.forEach(function (card) {
    if (card === exceptCard) return;
    const audio = card.querySelector('.audio-player');
    if (!audio.paused) audio.pause();
    setPlaying(card, false);
  });
}

cards.forEach(function (card) {
  const audio  = card.querySelector('.audio-player');
  const button = card.querySelector('.btn-audio');

  button.addEventListener('click', function () {
    if (audio.paused) {
      stopAll(card);                       // hentikan kartu lain dulu
      audio.play()
        .then(function () { setPlaying(card, true); })
        .catch(function () {
          // biasanya karena file audio tidak ketemu / nama file di src salah
          console.warn('Audio tidak bisa diputar. Cek nama file di src:', audio.getAttribute('src'));
          setPlaying(card, false);
        });
    } else {
      audio.pause();
      setPlaying(card, false);
    }
  });

  // kalau audio selesai (hanya terjadi kalau atribut loop dihapus), kembalikan tombol
  audio.addEventListener('ended', function () { setPlaying(card, false); });
});