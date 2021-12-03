module.exports = {
  printWidth: 80,
  tabWidth: 2,
  jsxBracketSameLine: true,
  singleQuote: true,
  semi: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
    {
      files: '*.html',
      options: {
        tabWidth: 4,
      },
    },
  ],
  arrowParens: 'always',
};
