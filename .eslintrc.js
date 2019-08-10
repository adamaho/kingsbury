module.exports = {
  parser: "babel-eslint",
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended'
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'react/jsx-wrap-multilines': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off'
  }
};