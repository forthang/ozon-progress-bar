import './ProgressBar.css';

export default class ProgressBar {
  constructor(container, options = {}) {
    this._container = container;
    this._value = options.value ?? 0;
    this._animated = options.animated ?? false;
    this._hidden = options.hidden ?? false;

    this._render();
    this._update();
  }

  getValue() {
    return this._value;
  }

  setValue(value) {
    this._value = Math.min(100, Math.max(0, Number(value) || 0));
    this._update();
  }

  getAnimated() {
    return this._animated;
  }

  setAnimated(animated) {
    this._animated = Boolean(animated);
    this._update();
  }

  getHidden() {
    return this._hidden;
  }

  setHidden(hidden) {
    this._hidden = Boolean(hidden);
    this._update();
  }

  _render() {
    this._el = document.createElement('div');
    this._el.className = 'progress-ring';

    this._inner = document.createElement('div');
    this._inner.className = 'progress-ring__inner';

    this._el.appendChild(this._inner);
    this._container.appendChild(this._el);
  }

  _update() {
    const angle = (this._value / 100) * 360;
    this._el.style.background = `conic-gradient(#005bff ${angle}deg, #e6e6e6 ${angle}deg)`;
    this._el.classList.toggle('progress-ring--animated', this._animated);
    this._el.classList.toggle('progress-ring--hidden', this._hidden);
  }
}
