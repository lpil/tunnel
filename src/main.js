import "./style.css";
import { context }        from "./canvas";
import { centredCircles } from "./plot";
import { perlin }         from "../vendor/noise";

window.perlin = perlin;

context.strokeStyle = "hotpink";
context.lineWidth = 2;

const radii = [
  0,  1,  2,  3,  4,  5,  6,  7,  8,  9,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
].map(x => 35 * x + 20);

centredCircles(context, window, radii);
