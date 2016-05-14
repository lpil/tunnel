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
      expect(buffer.get(i)).to.match(/^hsl\(\d{1,3}, \d{2,3}%, \d{2,3}%\)$/);
    }
    expect(i).to.equal(-1, "Didn't finish iterating");
  });

  it("has a mechanism for stepping, adding new noise", () => {
    const buffer = newRandColourBuffer(3);
    const a = buffer.get(0);
    buffer.step();
    const b = buffer.get(1);
    expect(a).to.equal(b);
  });
});
