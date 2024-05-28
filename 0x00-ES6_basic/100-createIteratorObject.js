export default function createIteratorObject(report) {
  const newList = Object.values(report.allEmployees).flatMap((value) => value);
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
