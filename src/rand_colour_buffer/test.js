import { newRandColourBuffer } from ".";

describe(newRandColourBuffer, () => {
  it("sets length", () => {
    const buffer = newRandColourBuffer(10);
    expect(buffer.length).to.equal(10);
  });

  it("prepopulates the buffer with a random hsl value", () => {
    const buffer = newRandColourBuffer(10);
    let i = buffer.length;
    while (i--) {
      expect(buffer.get(i)).to.match(/^hsl\(\d{1,3}, 200, 200\)$/);
    }
    expect(i).to.equal(-1, "Didn't finish iterating");
  });

  it("has a mechanism for stepping, adding new noise", () => {
    const buffer = newRandColourBuffer(3);
    const a0 = buffer.get(0);
    buffer.step();
    const b0 = buffer.get(0);
    const b1 = buffer.get(1);
    expect(a0).not.to.equal(b0);
    expect(a0).to.equal(b1);
  });
});
