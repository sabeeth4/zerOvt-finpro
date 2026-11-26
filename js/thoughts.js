// hitung si jumlah huruf
const input = document.getElementById('thought');
const count = document.getElementById('count');

function updateCount() {
    count.textContent = String(input.value.length).padStart(3, '0') + '/300';
}
input.addEventListener('input', updateCount);
updateCount();

// pesawat sama kertas kosong
const finishBtn = document.querySelector('.btn-finish');
const plane = document.getElementById('plane');
const popup = document.getElementById('emptyPopup');
const popupClose = document.getElementById('popupClose');

function openPopup() { popup.classList.add('show'); popupClose.focus(); }
function closePopup() { popup.classList.remove('show'); input.focus(); }

finishBtn.addEventListener('click', function () {
    if (plane.classList.contains('fly')) return;

    if (input.value.trim() === '') {
        openPopup();
        return;
    }

    plane.classList.add('fly');
    finishBtn.disabled = true;

    input.value = '';
    updateCount();

});

plane.addEventListener('animationend', function () {
    plane.classList.remove('fly');
    finishBtn.disabled = false;
});

popupClose.addEventListener('click', closePopup);
popup.addEventListener('click', function (e) { if (e.target === popup) closePopup(); });
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup.classList.contains('show')) closePopup();
});

// notif done after pesawat terbang
const donePopup = document.getElementById('donePopup');
const doneClose = document.getElementById('doneClose');

plane.addEventListener('animationend', function () {
    donePopup.classList.add('show');
    doneClose.focus();
});

function closeDone() { donePopup.classList.remove('show'); input.focus(); }

doneClose.addEventListener('click', closeDone);
donePopup.addEventListener('click', function (e) { if (e.target === donePopup) closeDone(); });
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && donePopup.classList.contains('show')) closeDone();
});