const DEFAULT_VALUE = 0x12345678;

function bytesOf(buffer) {
  return Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0"));
}

function inspect(value) {
  if (!Number.isInteger(value) || value < 0 || value > 0xffffffff) {
    throw new RangeError("value must be an unsigned 32-bit integer");
  }
  const bigBuffer = new ArrayBuffer(4);
  const bigView = new DataView(bigBuffer);
  bigView.setUint32(0, value, false);

  const littleBuffer = new ArrayBuffer(4);
  const littleView = new DataView(littleBuffer);
  littleView.setUint32(0, value, true);

  return {
    value,
    hex: "0x" + value.toString(16).padStart(8, "0"),
    bigEndianBytes: bytesOf(bigBuffer),
    littleEndianBytes: bytesOf(littleBuffer),
    bigBytesReadBig: bigView.getUint32(0, false),
    bigBytesReadLittle: bigView.getUint32(0, true),
    littleBytesReadBig: littleView.getUint32(0, false),
    littleBytesReadLittle: littleView.getUint32(0, true)
  };
}

function main() {
  const args = process.argv.slice(2);
  const valueIndex = args.indexOf("--value");
  const json = args.includes("--json");
  const raw = valueIndex >= 0 ? args[valueIndex + 1] : String(DEFAULT_VALUE);
  const value = raw && /^0x[\da-f]+$/i.test(raw) ? Number.parseInt(raw, 16) : Number(raw);
  try {
    const result = inspect(value);
    if (json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(`Value: ${result.hex} (${result.value})`);
    console.log("Big endian:    " + result.bigEndianBytes.join(" "));
    console.log("Little endian: " + result.littleEndianBytes.join(" "));
    console.log("Read big bytes as BE:", result.bigBytesReadBig);
    console.log("Read big bytes as LE:", result.bigBytesReadLittle);
    console.log("Read little bytes as BE:", result.littleBytesReadBig);
    console.log("Read little bytes as LE:", result.littleBytesReadLittle);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) main();
module.exports = { inspect };
