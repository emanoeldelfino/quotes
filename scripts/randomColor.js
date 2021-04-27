const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomElem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomElems(arr, num=1) {
  let randomElems = [];
  for (i=0; i < num; i++) {
    randomElems.push(getRandomElem(arr));
  }
  return randomElems;
}

function getHexColor() {
  let hexColor = '#';
  hexColor += getRandomElems(hexChars, 6).join('');
  return hexColor;
}

const root = document.documentElement;
const hexColor = getHexColor();
root.style.setProperty('--border-color', hexColor);

// const divContainer = document.querySelector('div#container');
// divContainer.style.borderColor = hexColor;
