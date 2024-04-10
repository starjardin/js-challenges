function betterThanAverage(classPoints, yourPoints) {
  const classAverage = classPoints.reduce((a,c) => a + c, 0) / classPoints.length
  
  return classAverage < yourPoints
}
