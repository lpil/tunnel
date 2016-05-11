import "./style.css";
import { context }       from "./canvas";
import { centredCircle } from "./shape";
import { perlin }        from "../vendor/noise";
import { newFloat32History } from "./history_buffer";

context.strokeStyle = "hotpink";
context.lineWidth = 2;

let perlinI        = 0.05;
const perlinD      = 0.05;
const noiseAmp     = 50;
const stepAmp      = 30;
const noiseHistory = newFloat32History(32);

const foo = newFloat32History(5);
window.foo = foo;

{
  let i = 0;
  while (i < noiseHistory.length) {
    const noise = perlin(perlinI) * noiseAmp;
    const step  = i * stepAmp;
    noiseHistory.put(step + noise);
    noiseHistory.step();
    perlinI += perlinD;
    i++;
  }
}

{
  let i = 0;
  let r = 0;
  while (i < noiseHistory.length && r !== undefined) {
    r = noiseHistory.get(i);
    context.beginPath();
    centredCircle(context, window, r);
    context.stroke();
    i++;
  }
}

window.noiseHistory = noiseHistory;
