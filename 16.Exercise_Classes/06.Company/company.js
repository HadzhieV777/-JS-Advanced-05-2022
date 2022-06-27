class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(username, salary, position, department) {
    let invalidInputs = ["", undefined, null];

    // input validation
    for (let input of arguments) {
      if (invalidInputs.includes(input)) {
        throw new Error("Invalid input!");
      }
    }

    // salary validation
    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    let employee = {
      username,
      salary,
      position,
    };

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }

    this.departments[department].push(employee);
    return `New employee is hired. Name: ${employee.username}. Position: ${employee.position}`;
  }

  bestDepartment() {
    let output = [];
    let biggestAvgSalary = Number.MIN_SAFE_INTEGER;
    let bestAvgSalaryDep = null;

    Object.keys(this.departments).forEach((dep) => {
      let avgSalary =
        this.departments[dep].reduce((acc, curr) => (acc += curr.salary), 0) /
        this.departments[dep].length;

      if (biggestAvgSalary <= avgSalary) {
        biggestAvgSalary = avgSalary;
        bestAvgSalaryDep = dep;
      }
    });

    output.push(`Best Department is: ${bestAvgSalaryDep}`);
    output.push(`Average salary: ${biggestAvgSalary.toFixed(2)}`);

    let sorted = this.departments[bestAvgSalaryDep].sort(sortByNameAndSalary);

    function sortByNameAndSalary(a, b) {
      if (a.salary > b.salary) {
        return -1;
      }

      if (a.salary < b.salary) {
        return 1;
      }

      return a.username.localeCompare(b.username);
    }

    for (let employee of sorted) {
      output.push(
        `${employee.username} ${employee.salary} ${employee.position}`
      );
    }

    return output.join("\n");
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
