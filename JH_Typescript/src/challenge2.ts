//filter
//foreach
//map

function reduceForEach<T>(items: T[], forEachFn: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFn(v);
    return undefined;
  }, undefined);
}

reduceForEach([1, 2, 3], (v) => console.log(v));

function reduceFilter<T>(items: T[], filterFn: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFn(v) ? [...a, v] : a), [] as T[]);
}

console.log(reduceFilter([5,6,7,8,9,10], (v) => v > 7));