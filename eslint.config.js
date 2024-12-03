export default [
  {
    files: ['**/*.js'], // Проверять все JS файлы
    ignores: ['node_modules', 'dist'], // Исключаем папки
    languageOptions: {
      ecmaVersion: 'latest', // Поддержка последней версии ECMAScript
      sourceType: 'module', // Используем модули ES
    },
    rules: {
      semi: ['error', 'always'], // Требовать точку с запятой
      quotes: ['error', 'single'], // Одинарные кавычки
      'no-unused-vars': ['warn'], // Предупреждение для неиспользуемых переменных
      indent: ['error', 2], // Отступ в 2 пробела
      eqeqeq: ['error', 'always'], // Всегда использовать === вместо ==
    },
  },
];
