function XO(str) {
  const reduced = [...str.toLowerCase()].reduce((acc, cur) => {
    if (cur === "o" || cur === "x") {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    }

    return acc;
  }, {});

  return reduced["x"] === reduced["o"];
}
