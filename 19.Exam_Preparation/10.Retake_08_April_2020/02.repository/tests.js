const { expect } = require("chai");
let { Repository } = require("./solution.js");

describe("Repository object", function () {
  let repo;
  beforeEach(() => {
    repo = new Repository({
      name: "string",
      age: "number",
      birthday: "object",
    });
  });

  describe("getter count", () => {
    it(`returns the correct value`, () => {
      expect(repo.count).to.eq(0);
    });
  });

  describe("add function", function () {
    it("validates the passed object and throws", function () {
      expect(() => repo.add({ age: 22, birthday: {} })).to.throw(
        "Property name is missing from the entity!"
      );
      expect(() => repo.add({ name: "", birthday: {} })).to.throw(
        "Property age is missing from the entity!"
      );
      expect(() => repo.add({ name: "", age: 22 })).to.throw(
        "Property birthday is missing from the entity!"
      );
      expect(() => repo.add({ name: 22, age: 22, birthday: {} })).to.throw(
        "Property name is not of correct type!"
      );
      expect(() => repo.add({ name: "", age: "", birthday: {} })).to.throw(
        "Property age is not of correct type!"
      );
      expect(() => repo.add({ name: "", age: 22, birthday: "" })).to.throw(
        "Property birthday is not of correct type!"
      );
    });

    it("adds the passed object and returns", function () {
      expect(repo.add({ name: "", age: 22, birthday: {} })).to.equal(0);
      expect(repo.add({ name: "", age: 22, birthday: {} })).to.equal(1);
      expect(repo.add({ name: "", age: 22, birthday: {} })).to.equal(2);
    });
  });

  describe("getId function", function () {
    it("validates the id and throws", function () {
      expect(() => repo.getId(4)).to.throw("Entity with id: 4 does not exist!");
    });

    it("takes a valid id and returns", function () {
      repo.add({ name: "", age: 22, birthday: {} });
      expect(typeof repo.getId(0)).to.equal("object");
    });
  });

  describe("update function", function () {
    it("validates the input and throws no entity with the given id", function () {
      expect(() =>
        repo.update(1, { name: "", age: 22, birthday: {} })
      ).to.throw("Entity with id: 1 does not exist!");
      expect(() =>
        repo.update(1, { name: "", age: 22, birthday: {} })
      ).to.throw("Entity with id: 1 does not exist!");
    });

    it("validates the input and throws if the given object not valid", function () {
      repo.add({ name: "", age: 22, birthday: {} });
      expect(() => repo.update(0, { age: 22, birthday: {} })).to.throw(
        "Property name is missing from the entity!"
      );
      expect(() => repo.update(0, { name: "", birthday: {} })).to.throw(
        "Property age is missing from the entity!"
      );
      expect(() => repo.update(0, { name: "", age: 22 })).to.throw(
        "Property birthday is missing from the entity!"
      );
      expect(() =>
        repo.update(0, { name: 22, age: 22, birthday: {} })
      ).to.throw(TypeError, "Property name is not of correct type!");
      expect(() =>
        repo.update(0, { name: "", age: "", birthday: {} })
      ).to.throw(TypeError, "Property age is not of correct type!");
      expect(() =>
        repo.update(0, { name: "", age: 22, birthday: "" })
      ).to.throw(TypeError, "Property birthday is not of correct type!");
    });
  });

  describe("del function", function () {
    it("validates the input and throws", function () {
      repo.add({ name: "", age: 22, birthday: {} });
      expect(() => repo.del(-1)).to.throw("Entity with id: -1 does not exist!");
      expect(() => repo.del(1)).to.throw("Entity with id: 1 does not exist!");
      expect(() => repo.del(2)).to.throw("Entity with id: 2 does not exist!");
    });

    it("deletes the object entity when index valid", function () {
      repo.add({ name: "", age: 1, birthday: {} });
      repo.add({ name: "", age: 1, birthday: {} });
      repo.del(1);
      expect(() => repo.getId(1)).to.throw("Entity with id: 1 does not exist!");
    });
  });
});
