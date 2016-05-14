import { newFloat32History } from "../history_buffer";
import { perlin }            from "../../vendor/noise";
import rand                  from "../rand";

function newNoiseBuffer(length, seed = rand(200), stepSize = 0.05, amp = 20) {
  const buffer = newFloat32History(length);
  const get = buffer.get;

  const step = () => {
    buffer.step();
    buffer.put(perlin(seed) * amp);
    seed += stepSize;
  };

  let i = length;
  while (i--) { step(); }

  return Object.freeze({ get, step, length });
}

export { newNoiseBuffer };
