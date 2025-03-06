# React Router를 사용한 애플리케이션 라우팅 설정

## 개요

이 코드는 `react-router-dom` 라이브러리를 사용하여 React 애플리케이션의 라우팅을 설정하는 `Main` 컴포넌트를 정의합니다. `BrowserRouter`를 통해 클라이언트 측 라우팅을 활성화하고, `Routes`와 `Route` 컴포넌트를 사용하여 URL 경로에 따라 다른 페이지를 렌더링합니다.

## 주요 기능 및 구조

### `BrowserRouter`

- 애플리케이션 전체를 감싸서 브라우저의 URL 변경을 감지하고 해당 경로에 맞는 컴포넌트를 렌더링합니다.

### `App` 컴포넌트

- `Routes`를 감싸는 최상위 컴포넌트로, 전체 애플리케이션의 레이아웃 또는 공통 기능을 제공합니다.

### `Routes` 및 `Route`

- 여러 `Route` 컴포넌트를 묶어 라우팅 규칙을 정의합니다.
- 특정 URL 경로(`path`)에 해당하는 컴포넌트(`element`)를 매핑합니다.

### 라우팅 규칙

| 경로                                  | 렌더링되는 컴포넌트              |
| ------------------------------------- | -------------------------------- |
| `/`                                   | `HomePage`                       |
| `/courses`                            | `CourseListPage`                 |
| `/courses/react-frontend-development` | `CoursePage`                     |
| `/wishlist`                           | `WishListPage`                   |
| `/questions`                          | `QuestionListPage`               |
| `/questions/:questionId`              | `QuestionPage` (동적 라우팅)     |
| `*`                                   | `NotFoundPage` (404 오류 페이지) |

## 추가 기능

### 중첩된 라우팅

- `courses`와 `questions` 경로는 중첩된 라우팅을 사용하여 하위 경로를 처리합니다.

### 동적 라우팅

- `/questions/:questionId` 경로는 `:questionId`를 동적 매개변수로 사용하여, 질문 ID에 따라 다른 질문 페이지를 표시합니다.

### 인덱스 라우팅

- `courses`와 `questions` 경로의 `index` 속성은 해당 경로의 기본 컴포넌트를 지정합니다.

## 페이지 컴포넌트

- `HomePage`: 애플리케이션의 메인 페이지
- `CourseListPage`: 강좌 목록 페이지
- `CoursePage`: 특정 강좌 상세 페이지
- `WishListPage`: 위시리스트 페이지
- `QuestionListPage`: 질문 목록 페이지
- `QuestionPage`: 특정 질문 상세 페이지
- `NotFoundPage`: 404 오류 페이지

## 교육 목적 리소스 고지 사항

이 코드는 교육 목적으로 제공되며, 코드 외에 포함된 모든 에셋, 이미지 등은 재사용 및 재배포가 금지됩니다.
