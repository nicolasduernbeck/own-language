const operators = ['+', '-', '*', '/', '%'];

const isNumber = char => /^[0-9]+$/.test(char);
const isLetter = char => char.toUpperCase() !== char.toLowerCase();
const isWhitespace = char => char === ' ';
const isOpeningParenthesis = char => char === '(';
const isClosingParenthesis = char => char === ')';
const isOperator = char => operators.includes(char);
const isQuote = char => char === '"';
const isParenthesis = char => isOpeningParenthesis(char) || isClosingParenthesis(char);

module.exports = {
  isNumber,
  isLetter,
  isWhitespace,
  isOpeningParenthesis,
  isClosingParenthesis,
  isOperator,
  isQuote,
  isParenthesis,
};
