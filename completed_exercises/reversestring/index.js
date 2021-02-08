// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

const reverse = str => {
  let word = str.split("");
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    let temp = word[word.length - 1 - i];
    word[word.length - 1 - i] = word[i];
    word[i] = temp;
  }
  return word.join("");
};

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
