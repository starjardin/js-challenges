function perfectSquare(string) {

    if (!string) {
        return false
    }

    const arr = string.split('\n')

    return arr.every(e => e.split('').every(i => i === '.') && e.length === arr.length)

}