const uniqueSum2 = (lst: Array<number>): number | null => {
  if (lst.length) {
    return [...new Set(lst)].reduce((x,y) => x + y, 0)
  }
  return null
}