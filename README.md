# Progress Bar

[![CI](https://github.com/forthang/ozon-progress-bar/actions/workflows/ci.yml/badge.svg)](https://github.com/forthang/ozon-progress-bar/actions/workflows/ci.yml)
[![Deploy](https://github.com/forthang/ozon-progress-bar/actions/workflows/deploy.yml/badge.svg)](https://github.com/forthang/ozon-progress-bar/actions/workflows/deploy.yml)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=000)
![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?logo=webpack&logoColor=000)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=githubpages&logoColor=fff)

Переиспользуемый компонент кругового прогресс-бара на чистом JavaScript.

**[Live Demo (Нажми)](https://forthang.github.io/ozon-progress-bar/)**

![Preview](https://i.ibb.co/twrvrZNS/image.png)

## Возможности

- Установка значения от 0 до 100
- Анимация вращения по часовой стрелке
- Скрытие/показ компонента
- Адаптивная верстка (portrait / landscape)
- API. Переиспользование комопнента

## Быстрый старт

```bash
cd frontend
npm install
npm start
```

## Использование компонента

Скопируйте папку `src/components/ProgressBar/` в свой проект.

```js
import ProgressBar from './components/ProgressBar';

const bar = new ProgressBar(document.getElementById('container'), {
  value: 0,         // начальное значение (0–100)
  animated: false,  // вращение
  hidden: false,    // скрыть
});
```

## API

| Метод | Описание |
|---|---|
| `setValue(n)` | Установить значение (0–100). Значения за пределами диапазона обрезаются автоматически |
| `getValue()` | Получить текущее значение |
| `setAnimated(bool)` | Включить/выключить вращение кольца |
| `getAnimated()` | Получить состояние анимации |
| `setHidden(bool)` | Скрыть/показать компонент |
| `getHidden()` | Получить состояние видимости |

### Пример

```js
bar.setValue(75);
bar.setAnimated(true);

console.log(bar.getValue());    // 75
console.log(bar.getAnimated()); // true
```

### Несколько экземпляров

```js
const bar1 = new ProgressBar(el1, { value: 25 });
const bar2 = new ProgressBar(el2, { value: 50, animated: true });
const bar3 = new ProgressBar(el3, { value: 100 });
```
