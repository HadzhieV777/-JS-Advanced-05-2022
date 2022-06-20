const { expect } = require("chai");
const { companyAdministration } = require("./solution");

describe("companyAdministration object", () => {
  describe("hiringEmployee method", () => {
    it("throws an error if position != Programmer", () => {
      expect(() =>
        companyAdministration.hiringEmployee("Test Name", "Test Position", 5)
      ).to.throw("We are not looking for workers for this position.");
    });

    it("didn't aprooves an employee if yearsExperience < 3", () => {
      expect(
        companyAdministration.hiringEmployee("Test Name", "Programmer", 1)
      ).to.equal("Test Name is not approved for this position.");
    });

    it("aprooves an employee if the employee meet the requirements", () => {
      expect(
        companyAdministration.hiringEmployee("Test Name", "Programmer", 3)
      ).to.equal(
        "Test Name was successfully hired for the position Programmer."
      );
      expect(
        companyAdministration.hiringEmployee("Test Name", "Programmer", 7)
      ).to.equal(
        "Test Name was successfully hired for the position Programmer."
      );
    });
  });

  describe("calculateSalary method", () => {
    it("validates the input and throw", () => {
      expect(() => companyAdministration.calculateSalary(-1)).to.throw(
        "Invalid hours"
      );
      expect(() => companyAdministration.calculateSalary("1")).to.throw(
        "Invalid hours"
      );
    });

    it("pays correctly to employees with <= 160 working hours", () => {
      expect(companyAdministration.calculateSalary(0)).to.equal(0);
      expect(companyAdministration.calculateSalary(120)).to.equal(1800);
      expect(companyAdministration.calculateSalary(160)).to.equal(2400);
    });

    it("gives bonuses to employees with > 160 working hours", () => {
      expect(companyAdministration.calculateSalary(160.5)).to.equal(3407.5);
      expect(companyAdministration.calculateSalary(200)).to.equal(4000);
    });
  });

  describe("firedEmployee method", () => {
    it("validates the input and throws", () => {
      expect(() => companyAdministration.firedEmployee({}, 1)).to.throw(
        "Invalid input"
      );
      expect(() =>
        companyAdministration.firedEmployee(["Pesho", "Gosho"], "1")
      ).to.throw("Invalid input");
      expect(() =>
        companyAdministration.firedEmployee(["Pesho", "Gosho"], -1)
      ).to.throw("Invalid input");
      expect(() =>
        companyAdministration.firedEmployee(["Pesho", "Gosho"], 2)
      ).to.throw("Invalid input");
    });

    it("successfuly fires the employee and removes it from the arr", () => {
      expect(
        companyAdministration.firedEmployee(["Pesho", "Gosho"], 1)
      ).to.equal("Pesho");
      expect(companyAdministration.firedEmployee(["Pesho"], 0)).to.equal("");
      expect(
        companyAdministration.firedEmployee(["Pesho", "Gosho", "Stamat"], 1)
      ).to.equal("Pesho, Stamat");
    });
  });
});
