const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
};
let timerID = null;


refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

function onClickStart() {
    timerID = setInterval(
        () => { refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)] },
        1000);
    refs.start.setAttribute('disabled', 'disabled')
};

function onClickStop() {
    clearInterval(timerID);
    refs.start.removeAttribute('disabled')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

