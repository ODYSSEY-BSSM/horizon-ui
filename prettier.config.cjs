/** @type {import('prettier').Config} */
module.exports = {
  // 컨벤션에 맞게 설정
  semi: true, // 세미콜론 필수
  singleQuote: true, // 싱글 따옴표
  jsxSingleQuote: true,
  tabWidth: 2, // 들여쓰기 공백 2개
  useTabs: false, // 탭 대신 공백 사용
  printWidth: 80, // 최대 줄 길이 80
  endOfLine: 'lf', // LF 줄바꿈

  // 기타 설정
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  quoteProps: 'as-needed',
  bracketSameLine: false,

  // 파일별 설정
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        parser: 'babel',
      },
    },
  ],
};
