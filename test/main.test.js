const test = require("node:test");
const assert = require("node:assert/strict");
const { inspect } = require("../src/main");

test("writes 0x12345678 in both byte orders", () => {
  const result = inspect(0x12345678);
  assert.deepEqual(result.bigEndianBytes, ["12", "34", "56", "78"]);
  assert.deepEqual(result.littleEndianBytes, ["78", "56", "34", "12"]);
  assert.equal(result.bigBytesReadBig, 0x12345678);
  assert.equal(result.littleBytesReadLittle, 0x12345678);
  assert.notEqual(result.bigBytesReadLittle, 0x12345678);
});

test("rejects values outside unsigned 32-bit range", () => {
  assert.throws(() => inspect(-1), RangeError);
  assert.throws(() => inspect(0x100000000), RangeError);
});
