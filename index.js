<<<<<<< Updated upstream
const visitBtn = document.getElementById('visit-btn');
const clickSound = document.getElementById('click-sound');

visitBtn.addEventListener('click', () => {
  clickSound.play();
});

setInterval(() => {
  visitBtn.style.animation = 'none';
  void visitBtn.offsetWidth;
  visitBtn.style.animation = 'pop 0.3s ease-in-out 3s infinite';
}, 3000);

=======
const visitBtn = document.getElementById('visit-btn');
const clickSound = document.getElementById('click-sound');

visitBtn.addEventListener('click', () => {
  clickSound.play();
});

setInterval(() => {
  visitBtn.style.animation = 'none';
  void visitBtn.offsetWidth;
  visitBtn.style.animation = 'pop 0.3s ease-in-out 3s infinite';
}, 3000);

>>>>>>> Stashed changes
