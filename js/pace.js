// js for breathe
const outerCircle = document.querySelector("#outer-circle");
const breathText = document.querySelector("#breathe-text");
const startBtn = document.querySelector("#startBtn");

const wait = (seconds) =>
  new Promise ((resolve) => setTimeout(resolve, seconds * 1000)
);

async function startExercise() {
  startBtn.disabled = true;
  startBtn.textContent = "feel it";

  for (let i = 1; i <= 4; i++) {
    // 1. Tarik napas: lingkaran membesar
    breathText.textContent = "Breathe In";
    outerCircle.style.transition = "transform 4s ease-in-out";
    outerCircle.style.transform = "scale(1.25)";
    await wait(4);

    // 2. Tahan: ukuran tetap
    breathText.textContent = "Hold";
    await wait(3);

    // 3. Buang napas: lingkaran mengecil
    breathText.textContent = "Breathe Out";
    outerCircle.style.transition = "transform 4s ease-in-out";
    outerCircle.style.transform = "scale(1)";
    await wait(4);

    // 4. diem bentar
    breathText.textContent = "u r doing great!";
    await wait(4)
  }

  breathText.textContent = "Done 🎉";
  startBtn.disabled = false;
  startBtn.textContent = "try again";

  
}

startBtn.addEventListener('click', startExercise)