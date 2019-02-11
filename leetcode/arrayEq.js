const arrayEq = (first, ...rest) => {
  // test equality of flat arrays
  if (first == null || rest == null) return false;

  if (!Array.isArray(first)) return false;
  for (let maybeArray of rest) {
    if (!Array.isArray(maybeArray)) return false;
  }

  for (let next of rest) {
    if (first.length !== next.length) return false;
  }

  for (let i in first) {
    for (let next of rest) {
      if (first[i] !== next[i]) return false;
    }
  }

  return true;
}

export default arrayEq;