const cards = document.querySelectorAll('.audio-card');

const LABEL_START = 'Start audio';
const LABEL_PAUSE = 'Pause audio';

function setPlaying(card, isPlaying) {
  const button = card.querySelector('.btn-audio');
  const label  = card.querySelector('.btn-label');
  const icon   = card.querySelector('.icon-play');

  button.classList.toggle('is-playing', isPlaying);
  label.textContent = isPlaying ? LABEL_PAUSE : LABEL_START;

  
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
      stopAll(card);
      audio.play()
        .then(function () { setPlaying(card, true); })
        .catch(function () {

          console.warn('Audio tidak bisa diputar. Cek nama file di src:', audio.getAttribute('src'));
          setPlaying(card, false);
        });
    } else {
      audio.pause();
      setPlaying(card, false);
    }
  });

  audio.addEventListener('ended', function () { setPlaying(card, false); });
});