function getGrowth(...args) {
  let result = [];

  for (let i = 0; i < args.length; i++) {
    if (i === 0) {
      result.push(`${args[i]} (+0, +0%)`);
    } else {
      let diff = args[i] - args[i - 1];
      let perc = Math.round((diff / args[i - 1]) * 100);
      result.push(
        `${args[i]} (${formatSignedInt(diff)}, ${formatSignedInt(perc)}%)`
      );
    }
  }
  return result.join(", ");
}

function formatSignedInt(num) {
  return num >= 0 ? `+${num}` : `${num}`;
}
