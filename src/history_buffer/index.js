function index(len, itr, n) {
  const offset = itr % len;
  const index = offset - n;
  if (index >= 0) {
    return index;
  } else {
    return len + index;
  }
}

function newFloat32History(length) {
  let iteration = 0;
  const store   = new Float32Array(length);

  const put = x => {
    if (typeof x !== "number") { throw NaN; }
    store[iteration % length] = x;
  };

  const get = (n = 0) => {
    if (n < length && n <= iteration && n >= 0) {
      const i = index(length, iteration, n);
      return store[i];
    }
  };

  const step = () => iteration++;

  return Object.freeze({ put, get, length, step });
}

export { newFloat32History };
