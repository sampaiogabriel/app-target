module.exports = {
  // Define que esta é a configuração raiz. Impede que o ESLint continue subindo nas pastas do seu computador procurando por outros arquivos .eslintrc.
  root: true,
  
  // Ignora os arquivos de configuração para evitar que o Babel tente processá-los como se fossem parte do código do aplicativo (o que causaria erro de parser).
  ignorePatterns: ['.eslintrc.js', 'babel.config.js'],
  
  // Conjuntos de regras e boas práticas pré-configuradas que o projeto vai herdar.
  extends: [
    '@react-native', // Regras oficiais da equipe do React Native.
    'plugin:react/recommended', // Boas práticas gerais para o React.
    'plugin:react-hooks/recommended', // Garante o uso seguro dos Hooks (ex: dependências do useEffect).
    'plugin:prettier/recommended' // Integra o Prettier, fazendo com que erros de formatação sejam tratados como erros do ESLint.
  ],
  
  // Plugins instalados que habilitam novas regras que não existem no núcleo padrão do ESLint.
  plugins: ['react', 'react-native', 'prettier', 'simple-import-sort'],
  
  // Customização, ativação ou desativação de regras específicas.
  rules: {
    // Trata falhas de formatação do Prettier como um erro grave no código.
    'prettier/prettier': 'error',
    
    // Desativa o erro para variáveis que foram declaradas mas ainda não foram usadas (muito útil para não travar durante a codificação).
    "@typescript-eslint/no-unused-vars": "off",
    
    // Liga a organização automática e alfabética de imports e exports sempre que o arquivo for salvo.
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Impede a criação de estilos soltos no StyleSheet que não estão sendo aplicados em nenhum componente (ajuda a limpar código morto).
    'react-native/no-unused-styles': 'error',
    
    // Alerta se você estiver misturando muito código específico de uma plataforma em um componente genérico (incentiva o uso de arquivos .ios.js e .android.js).
    'react-native/split-platform-components': 'warn',
    
    // Permite escrever estilos diretamente nas tags (ex: style={{ flex: 1 }}). Como está 'off', o ESLint não vai mais reclamar disso.
    'react-native/no-inline-styles': 'off',
    
    // Alerta quando você usa strings de cores (ex: '#000' ou 'red') direto no código em vez de usar um arquivo de variáveis/tema global.
    'react-native/no-color-literals': 'warn',
    
    // Permite passar componentes aninhados ou funções que retornam JSX dentro de props (como o tabBarIcon no Expo Router) sem acusar erro de performance.
    "react/no-unstable-nested-components": "off",
    
    // Desativa a obrigatoriedade de colocar `import React from 'react'` no topo de todos os arquivos (o React 17+ e o Expo já fazem isso por baixo dos panos).
    'react/react-in-jsx-scope': 'off'
  },
  
  // Informa ao ESLint o ambiente de execução, liberando variáveis globais específicas (como as do próprio React Native).
  env: {
    'react-native/react-native': true,
  }
};