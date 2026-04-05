module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.js', 'babel.config.js'],
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-native', 'prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    
    // Organização automática de imports e exports
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Regras de estilo e boas práticas do React Native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    
    // Opcional para React 17+ / Expo
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    'react-native/react-native': true,
  }
};