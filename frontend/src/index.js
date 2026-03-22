import './styles/main.css';

const ring = document.getElementById('progress-container');
const valueInput = document.getElementById('value-input');
const animateToggle = document.getElementById('animate-toggle');
const hideToggle = document.getElementById('hide-toggle');

function updateProgress(value) {
  const clamped = Math.min(100, Math.max(0, Number(value) || 0));
  const angle = (clamped / 100) * 360;
  ring.style.background = `conic-gradient(#005bff ${angle}deg, #e6e6e6 ${angle}deg)`;
}

valueInput.addEventListener('input', (e) => {
  let val = Number(e.target.value) || 0;
  if (val < 0) val = 0;
  if (val > 100) val = 100;
  e.target.value = val;
  updateProgress(val);
});

animateToggle.addEventListener('change', () => {
  ring.classList.toggle('progress-ring--animated', animateToggle.checked);
});

hideToggle.addEventListener('change', () => {
  ring.classList.toggle('progress-ring--hidden', hideToggle.checked);
});

updateProgress(valueInput.value);
