let expect = require("chai").expect;
const { PaymentPackage } = require("./paymentPackage");

describe("payment-package-tests", function () {
  let instance = undefined;

  this.beforeEach(() => {
    instance = new PaymentPackage("Pesho", 5);
  });

  it("should have valid constructor", () => {
    assert.equal(instance._name, "Pesho");
    assert.equal(instance._value, 5);
    assert.equal(instance._VAT, 20);
    assert.equal(instance._active, true);
  });

  it("should have correct name property", () => {
    assert.equal(instance.name, "Pesho");

    instance.name = "Gosho";

    assert.equal(instance.name, "Gosho");
    assert.throw(() => {
      instance.name = "";
    }, "Name must be a non-empty string");
    assert.throw(() => {
      instance.name = 2;
    }, "Name must be a non-empty string");
  });

  it("should have correct value property", () => {
    assert.equal(instance.value, 5);

    instance.value = 40;

    assert.equal(instance.value, 40);
    assert.throw(() => {
      instance.value = "40";
    }, "Value must be a non-negative number");
    assert.throw(() => {
      instance.value = -5;
    }, "Value must be a non-negative number");
    assert.throw(() => {
      instance.value = undefined;
    }, "Value must be a non-negative number");
    assert.throw(() => {
      instance.value = "string";
    }, "Value must be a non-negative number");
    assert.doesNotThrow(() => {
      instance.value = 0;
    }, "Value must be a non-negative number");
  });

  it("should have correct VAT property", () => {
    assert.equal(instance.VAT, 20);

    instance.VAT = 40;

    assert.equal(instance.VAT, 40);
    assert.throw(() => {
      instance.VAT = "40";
    }, "VAT must be a non-negative number");
    assert.throw(() => {
      instance.VAT = -5;
    }, "VAT must be a non-negative number");
    assert.throw(() => {
      instance.VAT = undefined;
    }, "VAT must be a non-negative number");
    assert.throw(() => {
      instance.VAT = "string";
    }, "VAT must be a non-negative number");
  });

  it("should have correct active property", () => {
    assert.equal(instance.active, true);

    instance.active = false;

    assert.isFalse(instance.active);
    assert.throw(() => {
      instance.active = "string";
    }, "Active status must be a boolean");
    assert.throw(() => {
      instance.active = 0;
    }, "Active status must be a boolean");
  });

  it("should have correct method toString", () => {
    function theString(name, value, VAT = 20, active = true) {
      const output = [
        `Package: ${name}` + (active === false ? " (inactive)" : ""),
        `- Value (excl. VAT): ${value}`,
        `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`,
      ];

      return output.join("\n");
    }

    assert.equal(
      instance.toString(),
      theString(instance.name, instance.value, instance.VAT)
    );
    instance.active = false;
    assert.equal(
      instance.toString(),
      theString(instance.name, instance.value, instance.VAT, false)
    );
    instance.VAT = 40;
    assert.equal(
      instance.toString(),
      theString(instance.name, instance.value, 40, false)
    );
    instance.name = "Gosho";
    assert.equal(
      instance.toString(),
      theString("Gosho", instance.value, 40, false)
    );
    instance.value = 2;
    assert.equal(instance.toString(), theString("Gosho", 2, 40, false));
  });
});
