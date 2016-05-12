import "./style.css";
import { context }       from "./canvas";
import { centredCircle } from "./shape";
import { newNoiseBuffer } from "./noise_buffer";

context.strokeStyle = "hotpink";
context.lineWidth = 2;

const seed         = 0.1;
const perlinInc    = 0.05;
const noiseAmp     = 100;
const stepAmp      = 30;
const noiseHistory = newNoiseBuffer(32, seed, perlinInc, noiseAmp);

{
  let i = 0;
  while (i < noiseHistory.length) {
    const noise  = noiseHistory.get(i);
    const radius = noise + i * stepAmp;
    context.beginPath();
    centredCircle(context, window, radius);
    context.stroke();
    i++;
  }
}

window.noiseHistory = noiseHistory;
