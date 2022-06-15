(function solve() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this.toString();
    }

    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this.toString() + str;
    }

    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return this.toString() === "" ? true : false;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (this.includes(" ")) {
      let arr = this.split(" ");

      while (arr.join(" ").length + 3 > n) {
        arr.pop();
      }

      return arr.join(" ") + "...";
    }

    if (n < 4) {
      return ".".repeat(n);
    }

    return this.substring(0, n - 3) + "...";
  };

  String.format = function (string, ...params) {
    if (params !== undefined) {
      params.forEach((w) => (string = string.replace(/{\d+}/, w)));

      return string;
    }
  };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);
str = str.ensureStart("hello ");
console.log(str);
console.log(str.isEmpty());
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format("The {0} {1} fox", "quick", "brown");

console.log(str);

str = String.format("jumps {0} {1}", "dog");

console.log(str);
