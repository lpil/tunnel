import { newArrayHistory } from "../history_buffer";
import { perlin }          from "../../vendor/noise";
import rand                from "../rand";

function newColour(seed) {
  const hue = Math.round(perlin(seed) * 360 * 2);
  return `hsl(${hue}, 90%, 50%)`;
}

function newRandColourBuffer(length, seed = rand(200)) {
  const incrementSize = 0.004;
  const buffer = newArrayHistory(length);
  const get = buffer.get;

  const step = () => {
    buffer.step();
    buffer.put(newColour(seed));
    seed += incrementSize;
  };

  let i = length;
  while (i--) { step(); }

  return Object.freeze({ get, step, length });
}

export { newRandColourBuffer };
