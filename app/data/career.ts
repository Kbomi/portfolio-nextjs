export interface CareerProps {
  id: number;
  color: string;
  title: string;
  date: string;
  leave?: string;
  description: string;
  content: string;
  projects: {
    title: string;
    description: string;
    skill: string;
    date: string;
    url?: {
      link: string;
      text: string;
    }[];
  }[];
}

const career: CareerProps[] = [
  {
    id: 0,
    color: '#0039a6',
    title: '김지민앤컴퍼니',
    date: '2018.09 - 2020.01',
    description: '웹 에이전시에서 다양한 웹사이트 구축/리뉴얼을 수행하며 시맨틱 마크업과 반응형 UI 구현 경험을 쌓았습니다.',
    content: '웹 에이전시에서 다양한 웹사이트 구축/리뉴얼을 수행하며 시맨틱 마크업과 반응형 UI 구현 경험을 쌓았습니다.',
    projects: [
      {
        date: '2018.09 - 2020.01',
        title: '웹사이트 구축 및 리뉴얼',
        description: '- WordPress, Pug, HTML, CSS 기반 웹사이트/블로그 구축 및 리뉴얼\n- 시맨틱 마크업, 반응형 UI, 크로스브라우징을 고려한 퍼블리싱 수행\n- 클라이언트 요구사항에 맞춰 JavaScript 커스터마이징 및 화면 수정 대응',
        skill: 'HTML, CSS, JavaScript, WordPress, Pug, React'
      }
    ]
  },
  {
    id: 1,
    color: '#ff5c36',
    title: '두핸즈',
    date: '2020.01 - 2021.03',
    description: 'Next.js 기반 홈페이지와 WMS 화면 구축 및 운영 서비스 유지보수를 담당했습니다.',
    content: 'Next.js 기반 홈페이지와 WMS 화면 구축 및 운영 서비스 유지보수를 담당했습니다.',
    projects: [
      {
        date: '2020.01 - 2021.03',
        title: '물류 서비스 웹 화면 구축 및 유지보수',
        description: '- Next.js 기반 홈페이지와 WMS 화면 퍼블리싱 구축\n- API 응답 데이터를 화면에 연동하고 운영 중 발생한 화면 오류 수정\n- Strapi 기반 문의 기능 관리 및 홈페이지 리뉴얼 작업 참여',
        skill: 'Next.js, React, SCSS, Strapi'
      }
    ]
  },
  {
    id: 2,
    color: '#000',
    title: '브랜디',
    date: '2021.04.10 - 2023.07',
    description: 'Vue 기반 운영 서비스 유지보수와 React 기반 디자인 시스템/주문서 웹 개발을 경험했습니다.',
    content: 'Vue 기반 운영 서비스 유지보수와 React 기반 디자인 시스템/주문서 웹 개발을 경험했습니다.\n퍼블리셔로 입사해 웹 운영과 디자인 시스템 작업을 담당했고, 이후 프론트엔드 개발 업무로 확장했습니다.',
    projects: [
      {
        date: '2021.04 - 2023.04',
        title: '브랜디/하이버 웹 유지보수',
        description: '- Vue 기반 브랜디/하이버 웹 화면 운영 유지보수\n- 운영 중 발생한 UI 수정과 퍼블리싱 개선 요청 대응',
        skill: 'Vue, SCSS'
      },
      {
        date: '2021.08 - 2022.11',
        title: '웹 디자인 시스템 구축',
        description: '- React 기반 Input, Textarea, Modal 등 공통 컴포넌트 구현\n- 서비스별 컬러와 UI 톤을 반영할 수 있도록 디자인 시스템의 테마 구조 활용\n- 공통 컴포넌트를 서비스 화면에 적용하며 화면별 퍼블리싱 차이 조정',
        skill: 'React, SCSS'
      },
      {
        date: '2022.06 - 2023.05',
        title: '주문서 웹 개발',
        description: '- 장바구니, 주문서, 주문완료 흐름의 주요 UI와 데이터 연동 구현\n- SWR 기반 서버 데이터 호출/캐싱, Recoil 기반 화면 상태 관리\n- 여러 서비스에서 공통으로 사용하는 주문 흐름을 한 프로젝트에서 관리할 수 있도록 개발 참여',
        skill: 'React, Recoil, SWR'
      },
    ]
  },
  {
    id: 3,
    color: '#0b572b',
    title: '컬티랩스',
    date: '2023.10 - 재직중',
    leave: '2025.07 - 현재 휴직 중',
    description: '스마트팜 관련 웹 기능 운영 및 개선과 Flutter 앱 신규 개발/개편을 담당했습니다.',
    content: '스마트팜 관련 웹 기능 운영 및 개선과 Flutter 앱 신규 개발/개편을 담당했습니다.\n웹 운영 경험을 바탕으로 앱 화면 개발까지 업무 범위를 확장했습니다.',
    projects: [
      {
        date: '2023.10 - 2025.06',
        title: '스마트팜 관련 웹 기능 운영 및 개선',
        description: '- 컬티데이터, 컬티그로스, 컬티매니저 등 스마트팜 관련 웹 기능 운영 및 개선\n- 운영 중 발견된 화면 오류와 UI 개선 요청 반영\n- 신규 데이터 구조에 맞춘 화면 표시용 데이터 가공 및 조회 흐름 구현',
        skill: 'HTML, CSS, JavaScript'
      },
      {
        date: '2024.07 - 2025.06',
        title: '컬티데이터 Flutter 앱 개발 및 개편',
        description: '- 기존 운영 앱이 없는 상태에서 Flutter 앱 신규 개발\n- Dio API 연동, FlutterSecureStorage 토큰 관리, Provider 상태 관리 적용\n- 초기 웹 기반 화면 구조를 사업부 요청에 맞춰 앱 전용 조회/관리 화면으로 개편',
        skill: 'Flutter, Provider, Dio'
      },
    ]
  },
];

export default career;
