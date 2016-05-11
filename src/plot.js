import { centredCircle } from "./shape";

function centredCircles(context, window, radii) {
  let i = radii.length;
  while (i--) {
    context.beginPath();
    centredCircle(context, window, radii[i]);
    context.stroke();
  }
}

export { centredCircles };
