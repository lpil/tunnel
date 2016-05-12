import { newNoiseBuffer } from ".";

describe(newNoiseBuffer, () => {
  it("sets length", () => {
    const buffer = newNoiseBuffer(10);
    expect(buffer.length).to.equal(10);
  });

  it("prepopulates the buffer with noise", () => {
    const buffer = newNoiseBuffer(10);
    let i = buffer.length;
    while (i--) {
      expect(buffer.get(i)).to.be.above(1);
    }
    expect(i).to.equal(-1, "Didn't finish iterating");
  });

  it("has a mechanism for stepping, adding new noise", () => {
    const buffer = newNoiseBuffer(3);
    const a0 = buffer.get(0);
    buffer.step();
    const b0 = buffer.get(0);
    const b1 = buffer.get(1);
    expect(a0).not.to.be.closeTo(b0, 0.01);
    expect(a0).to.be.closeTo(b1, 0.01);
  });
});
