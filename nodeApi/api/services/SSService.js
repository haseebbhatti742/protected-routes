function getMin(data) {
  return Math.min(...data.map((item) => parseInt(item.salary)));
}

function getMax(data) {
  return Math.max(...data.map((item) => parseInt(item.salary)));
}

function getMean(data) {
  return (
    data.reduce((acc, item) => acc + parseInt(item.salary), 0) / data.length
  );
}

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

export { groupBy, getMin, getMax, getMean };
