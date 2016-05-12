import "./style.css";
import { context }       from "./canvas";
import { centredCircle } from "./shape";
import { newNoiseBuffer } from "./noise_buffer";

context.strokeStyle = "hotpink";
context.lineWidth = 2;

const seed         = 0.1;
const perlinInc    = 0.006;
const noiseAmp     = 200;
const stepAmp      = 55;
const noiseHistory = newNoiseBuffer(32, seed, perlinInc, noiseAmp);

function plot(buffer) {
  let i = 1;
  while (i < buffer.length) {
    const noise  = buffer.get(i);
    const radius = noise + i * stepAmp;
    context.beginPath();
    centredCircle(context, window, radius);
    context.stroke();
    i++;
  }
}

function drawFrame() {
  context.fillStyle = "rgba(0, 0, 0, 0.10)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  noiseHistory.step();
  plot(noiseHistory);
  requestAnimationFrame(drawFrame);
}
drawFrame();
