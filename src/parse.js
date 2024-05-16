const { isClosingParenthesis, isOpeningParenthesis } = require('./helpers');

const tokens = [
  { type: 'Parenthesis', val: '(' },
  { type: 'Number', val: 1 },
  { type: 'Operator', val: '+' },
  { type: 'Number', val: 2 },
  { type: 'Parenthesis', val: ')' },
];

function parse(tokens) {
  const token = tokens.shift();

  if (token.type === 'Number') {
    return {
      type: 'NumericLiteral',
      value: token.val,
    };
  } else if (token.type === 'String')
    return {
      type: 'StringLiteral',
      name: token.val,
    };
}

const ast = parse(tokens);

console.log(ast);
