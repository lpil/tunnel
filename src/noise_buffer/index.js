import { newFloat32History } from "../history_buffer";
import { perlin }            from "../../vendor/noise";

function newNoiseBuffer(length, seed = 0.1, incrementSize = 0.05, amp = 20) {
  const buffer = newFloat32History(length);
  const get = buffer.get;

  const step = () => {
    buffer.step();
    buffer.put(perlin(seed) * amp);
    seed += incrementSize;
  };

  let i = length;
  while (i--) { step(); }

  return Object.freeze({ get, step, length });
}

export { newNoiseBuffer };
