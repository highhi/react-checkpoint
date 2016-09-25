export function selection(items, callback) {
  const results = [];

  items.forEach((item, i) => {
    const result = callback(item);

    if (result === undefined || result === null) {
      return;
    }

    results[i] = result;
  });

  return results;
}
