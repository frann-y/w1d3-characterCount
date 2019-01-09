
function countLetters(words) {
  var words = words.toLowerCase().split(" ").join("").split("");
  var letters = {};
  for (alphabet of words) {
    if (!letters[alphabet]) {
      letters[alphabet] = 1;
    }
    else {
      letters[alphabet] += 1;
    }
  }
  return letters;
}


