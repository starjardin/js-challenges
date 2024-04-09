function isItLetter(s, character = s.toLowerCase()) {
  return character.charCodeAt(character) >= 97 && character.charCodeAt(character) <= 122
}