String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((e) => {
      if (e.toUpperCase() === e) {
        return e.toLowerCase();
      } else {
        return e.toUpperCase();
      }
    })
    .join("");
};
