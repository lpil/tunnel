function setSize(el, window) {
  el.height = window.innerHeight - 4;
  el.width  = window.innerWidth;
}

const canvasElement = document.createElement("canvas");
const context       = canvasElement.getContext("2d");

setSize(canvasElement, window);
window.onresize = () => setSize(canvasElement, window);

document.body.appendChild(canvasElement);

export { canvasElement, context };
