export default function createInt8TypedArray(length, position, value) {
  if ([length, position, value].every((item) => typeof item === 'number')) {
    const buffer = new ArrayBuffer(10);
    const typedArray = new Int8Array(buffer);
    if (position + 1 > length) {
      throw new Error('Position outside range');
    }
    typedArray[position] = value;
    return new DataView(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
  }
  return undefined;
}
