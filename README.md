# @odyssey-horizon/ui

Odyssey Horizon 프로젝트를 위한 UI 컴포넌트 라이브러리입니다.

## 설치

```bash
# pnpm
pnpm add @odyssey-horizon/ui
```

## 사용법

```tsx
import { colors, fonts } from '@odyssey-horizon/ui';

// 컴포넌트 사용 예시
function MyComponent() {
  return <div style={{ color: colors.primary }}>Hello World</div>;
}
```

## 개발

### 설치

```bash
pnpm install
```

### 개발 서버

```bash
pnpm dev
```

### 테스트

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
```

### 린트 & 포맷

```bash
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
```

### 빌드

```bash
pnpm build
```

### Storybook

```bash
pnpm storybook
pnpm build-storybook
```

### GitHub Actions 로컬 테스트 (act)

```bash
# act 설치 (Docker 필요)

# macOS (Homebrew 권장)
brew install act

# Linux
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

# CI 워크플로우 테스트
pnpm act:ci

# Release 워크플로우 테스트
pnpm act:release

# Storybook 워크플로우 테스트
pnpm act:storybook
```

## 배포

### 자동 버전 관리 (권장)

커밋 메시지에 특정 키워드를 포함하면 자동으로 버전이 올라가고 릴리즈됩니다:

```bash
# 패치 버전 올리기 (1.0.0 → 1.0.1)
git commit -m "fix: 버그 수정 [patch]"

# 마이너 버전 올리기 (1.0.0 → 1.1.0)
git commit -m "feat: 새로운 기능 추가 [minor]"

# 메이저 버전 올리기 (1.0.0 → 2.0.0)
git commit -m "feat: breaking change [major]"
```

**지원하는 키워드:**

- `[patch]` 또는 `[version:patch]` - 패치 버전
- `[minor]` 또는 `[version:minor]` - 마이너 버전
- `[major]` 또는 `[version:major]` - 메이저 버전

### 수동 배포

```bash
# 패치 버전 (1.0.0 → 1.0.1)
pnpm release

# 마이너 버전 (1.0.0 → 1.1.0)
pnpm release:minor

# 메이저 버전 (1.0.0 → 2.0.0)
pnpm release:major
```

## 문서

- [Storybook 문서](https://odyssey-bssm.github.io/horizon-ui/)
- [컴포넌트 API 문서](./docs/components.md)

## 기술 스택

- **TypeScript** - 타입 안전성
- **React** - UI 라이브러리
- **Emotion** - CSS-in-JS
- **Jest** - 테스팅
- **Storybook** - 컴포넌트 문서화
- **ESLint** - 코드 품질
- **Prettier** - 코드 포맷팅
- **tsup** - 번들링
- **GitHub Actions** - CI/CD

## 라이선스

MIT
