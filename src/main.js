import "./style.css";
import { context }             from "./canvas";
import { centredCircle }       from "./shape";
import { newNoiseBuffer }      from "./noise_buffer";
import { newRandColourBuffer } from "./rand_colour_buffer";

context.lineWidth = 2;

const seed          = 0.1;
const perlinInc     = 0.003;
const noiseAmp      = 150;
const stepAmp       = 55;
const noiseHistory  = newNoiseBuffer(32, seed, perlinInc, noiseAmp);
const colourHistory = newRandColourBuffer(32);

function plot(noiseBuffer, colourBuffer) {
  let i = 1;
  while (i < noiseBuffer.length) {
    const noise  = noiseBuffer.get(i);
    const radius = noise + i * stepAmp;
    const colour = colourBuffer.get(i);
    context.strokeStyle = colour;
    context.beginPath();
    centredCircle(context, window, radius);
    context.stroke();
    i++;
  }
}

function drawFrame() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.fillStyle = "";
  noiseHistory.step();
  colourHistory.step();
  plot(noiseHistory, colourHistory);
  requestAnimationFrame(drawFrame);
}
drawFrame();
