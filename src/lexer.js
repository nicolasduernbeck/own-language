const {
  isNumber,
  isLetter,
  isWhitespace,
  isOperator,
  isQuote,
  isParenthesis,
} = require('./helpers');

function tokenize(sourceCode) {
  const src = sourceCode.split('');
  const tokens = [];

  while (src.length > 0) {
    const char = src[0];
    if (isWhitespace(char)) {
      // skip if whitespace
      src.shift();
    } else if (isParenthesis(char)) {
      // Handle Parenthesis
      tokens.push({ type: 'Parenthesis', val: src.shift() });
    } else if (isOperator(char)) {
      // Handle Operators
      tokens.push({ type: 'Operator', val: src.shift() });
    } else if (isNumber(char)) {
      // Handle Numbers
      let currentNumber = '';
      while (isNumber(src[0])) {
        currentNumber += src[0];
        src.shift();
      }
      tokens.push({ type: 'Number', val: +currentNumber });
    } else if (isLetter(src[0])) {
      //Handle Letters
      let currentString = '';
      while (isLetter(src[0])) {
        currentString += src[0];
        src.shift();
      }
      tokens.push({ type: 'String', val: currentString });
    } else if (isQuote(src[0])) {
      // Handle quotes
      tokens.push({ type: 'Quote', val: src.shift() });
    } else {
      throw 'Invalid character found! ';
    }
  }

  return tokens;
}

console.log(tokenize('(1+2)'));
