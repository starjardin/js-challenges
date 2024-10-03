function reverseMessage(str) {
  if (str === "") {
    return str;
  }
  return str
    .split(" ")
    .reverse()
    .map((e) => {
      if (/^[!#>,]/.test()) {
        return e.split("").reverse().join("").toLowerCase();
      } else {
        let temp = e.toLowerCase().split("").reverse();
        let temp2 = temp.at(0).toUpperCase();
        return temp2 + temp.slice(1).join("");
      }
    })
    .join(" ");
}
