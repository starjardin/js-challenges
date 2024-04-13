const rpsls = (pl1,pl2) =>{
  
  if (pl1 === pl2) {
    return "Draw!"
  }
  
  const match = {
    rock: ['scissors', 'lizard'],
    scissors: ['paper', 'lizard'],
    spock: ['rock', 'scissors'],
    lizard: ['spock', 'paper'],
    paper: ['rock', 'spock']
  }
  
  return match[pl1].includes(pl2) ? 'Player 1 Won!' : 'Player 2 Won!'
}