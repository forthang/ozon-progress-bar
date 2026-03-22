import './styles/main.css';
import ProgressBar from './components/ProgressBar';

const container = document.getElementById('progress-container');
const valueInput = document.getElementById('value-input');
const animateToggle = document.getElementById('animate-toggle');
const hideToggle = document.getElementById('hide-toggle');

const progressBar = new ProgressBar(container, { value: 0 });

valueInput.addEventListener('input', (e) => {
  progressBar.setValue(e.target.value);
  e.target.value = progressBar.getValue();
});

animateToggle.addEventListener('change', () => {
  progressBar.setAnimated(animateToggle.checked);
});

hideToggle.addEventListener('change', () => {
  progressBar.setHidden(hideToggle.checked);
});
