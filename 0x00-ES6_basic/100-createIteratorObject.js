export default function createIteratorObject(report) {
  const newMap = Object.values(report.allEmployees);
  const newList = [];
  for (const value of newMap) {
    for (const item of value) {
      newList.push(item);
    }
  }

  return {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          if (counter < newList.length) {
            const result = { done: false, value: newList[counter] };
            counter += 1;
            return result;
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
