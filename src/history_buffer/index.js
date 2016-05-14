function index(len, itr, n) {
  const offset = itr % len;
  const i = offset - n;
  if (i >= 0) {
    return i;
  } else {
    return len + i;
  }
}

function newHistoryBuffer(length, bufferClass) {
  let iteration = 0;
  const store   = new bufferClass(length);

  const put = x => {
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

function newFloat32History(length) {
  return newHistoryBuffer(length, Float32Array);
}

function newArrayHistory(length) {
  return newHistoryBuffer(length, Array);
}

export { newFloat32History, newArrayHistory };
