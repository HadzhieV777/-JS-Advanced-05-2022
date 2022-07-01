function extensibleObject() {
  let proto = {};
  let objToExtend = Object.create(proto);

  objToExtend.extend = function (template) {
    for (let key in template) {
      if (typeof template[key] === "function") {
        let proto = Object.getPrototypeOf(objToExtend);
        proto[key] = template[key];
      } else {
        objToExtend[key] = template[key];
      }
    }
  };

  return objToExtend;
}
