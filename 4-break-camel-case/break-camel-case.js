function isUppercase(letter) {
  return letter === letter.toUpperCase();
}

function solution(string) {
  const str = string.split('')
  return str.map(e => {
    if (isUppercase(e)) {
      return " " + e
    }
    return e
  }).join('')
}

// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}