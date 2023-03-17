# 원티드 프리온보딩 Week3 기업과제 - 플렉시스

<br />

## ✏️ 과제 설명

주어진 데이터를 기반으로 시계열 차트 만들기

<br />

## 💡 프로젝트 실행 방법

```
git clone https://github.com/wanted-pre-onboarding-internship-1team/pre-onboarding-9th-3-1.git
npm install
npm start
```

<br />

## 📌 배포 링크

http://wanted-intenship-project2.s3-website.ap-northeast-2.amazonaws.com/

<br />

## 🛠 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled-component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">

<br />

## 🎄 폴더 구조

```
📄.src
├── App.tsx
├── apis
│   ├── index.ts
│   ├── instance.ts
│   ├── mockService.ts
│   └── types
│       └── mock.ts
├── components
│   ├── chart
│   │   ├── Chart.tsx
│   │   ├── ChartHeader.tsx
│   │   └── types
│   │       └── Points.ts
│   └── filter
│       ├── Filter.tsx
│       └── types
│           └── StyleProps.ts
├── constants
│   └── colors.ts
├── hooks
│   ├── useMockList.ts
│   └── useQuerystring.ts
├── index.css
├── index.tsx
├── pages
│   └── Mainpage.tsx
└── router
    └── router.tsx
```

<br />

## 👏 협업 방법

주된 커뮤니케이션 툴로 [**팀 노션**](https://www.notion.so/1-48d83304b94c42ad8352fcf6e7973b9f?pvs=4) 페이지와 **디스코드**, **Google meet**를 사용했습니다.

### **노션 페이지**

1. 팀원들의 코드를 분석하고, 그 중에서 Best Practice를 정리하였습니다.
2. commit 컨벤션, git flow 전략, 네이밍을 정의하였습니다.
3. 팀원들의 역할 분담, 일정 조율을 위해 활용되었습니다.

### **Discord / Google Meet**

팀원들의 의사소통 및 화면 공유를 통한 협업을 위해 활용되었습니다.

<br />

## ⭐️ 과제 구현 및 Best Practice 산정

### 전반적인 프로젝트

> - 추가 플러그인을 사용하지 않아 번들크기가 가볍고 기본기능이 많아서 `ApexCharts` 사용
> - AWS S3를 통해 배포하여 CI/CD 자동화 배포를 구축

<br />

#### ✅ Assignment 1

- 주어진 JSON 데이터의 key값(시간)을 기반으로 시계열 차트를 만들어주세요
- 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
- Area 그래프의 기준값은 value_area 값을 이용해주세요
- Bar 그래프의 기준값은 value_bar 값을 이용해주세요
- 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)

> **💡 Best Practice 산정 이유**
>
> -

<br />
    
#### ✅ Assignment 2

- 특정 데이터 구역에 마우스 호버시 id, value_area, value_bar 데이터를 툴팁 형태로 제공해주세요

<br/>

> **💡 Best Practice 산정 이유**
>
> -
> -

#### ✅ Assignment 3

- 필터링 기능을 구현해주세요, 필터링은 특정 데이터를 하이라이트 하는 방식으로 구현해주세요
- 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
- 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
- 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

> **💡 Best Practice 산정 이유**
>
> -

<br />

## 💗 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/merrybmc"><img src="https://avatars.githubusercontent.com/u/65064563?v=4" width="100px;" alt=""/><br /><sub><b>조병민(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sujeong-dev"><img src="https://avatars.githubusercontent.com/u/112826154?v=4" width="100px;" alt=""/><br /><sub><b>구수정</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rladygks329"><img src="https://avatars.githubusercontent.com/u/64533351?v=4" width="100px;" alt=""/><br /><sub><b>김요한</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sduu"><img src="https://avatars.githubusercontent.com/u/46313348?v=4" width="100px;" alt=""/><br /><sub><b>손혜수</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/SeungYn"><img src="https://avatars.githubusercontent.com/u/66045666?v=4" width="100px;" alt=""/><br /><sub><b>유승윤</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/lzns960"><img src="https://avatars.githubusercontent.com/u/78632299?v=4" width="100px;" alt=""/><br /><sub><b>박수지</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/gong25"><img src="https://avatars.githubusercontent.com/u/60168937?v=4" width="100px;" alt=""/><br /><sub><b>신공섭</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dhsimpson"><img src="https://avatars.githubusercontent.com/u/12489026?v=4" width="100px;" alt=""/><br /><sub><b>윤동희</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dobidugi"><img src="https://avatars.githubusercontent.com/u/21123166?v=4" width="100px;" alt=""/><br /><sub><b>이유태</b></sub></a><br /></td>
     <tr/>
     
  </tbody>
</table>
