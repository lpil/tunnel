import { newFloat32History } from ".";

describe(newFloat32History, () => {
  it("sets length", () => {
    const history = newFloat32History(10);
    expect(history.length).to.equal(10);
  });

  it("stores numbers", () => {
    const history = newFloat32History(2);
    history.put(3.3333);
    expect(history.get()).to.be.within(3.3333, 3.3334);
  });

  it("throws with non-numbers", () => {
    const history = newFloat32History(2);
    expect(() => history.put("hello")).to.throw(NaN);
  });


  it("can store a sequence of numbers", () => {
    const history = newFloat32History(3);
    history.put(3.3333);
    history.step();
    history.put(2.2222);
    expect(history.get()).to.be.within(2.2221, 2.2223);
    expect(history.get(0)).to.be.within(2.2221, 2.2223);
    expect(history.get(1)).to.be.within(3.3332, 3.3334);
    expect(history.get(2)).to.equal(undefined);
    expect(history.get(3)).to.equal(undefined);
    expect(history.get(-1)).to.equal(undefined);
  });

  it("cannot be externally modified", () => {
    const history = newFloat32History(3);
    expect(() => history.length = 4).to.throw();
    expect(history.length).to.equal(3);
  });
});
