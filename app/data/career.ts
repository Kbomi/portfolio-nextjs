export interface CareerProps {
  id: number;
  color: string;
  title: string;
  date: string;
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
    description: '웹 에이전시에서 다양한 환경에서 퍼블리싱 업무를 수행.\nWordPress, Pug, HTML, CSS 등을 활용해 여러 웹사이트와 블로그를 구축 및 리뉴얼.',
    content: '웹 에이전시에서 다양한 환경에서 퍼블리싱 업무를 수행.\nWordPress, Pug, HTML, CSS 등을 활용해 여러 웹사이트와 블로그를 구축 및 리뉴얼.',
    projects: [
      {
        date: '2018.11 - 2018.12',
        title: '품고 블로그 구축',
        description: '- 웹 퍼블리싱\n- 기능은 WordPress의 플러그인을 사용하고 JavaScript로 커스터마이징 했습니다.',
        skill: 'Wordpress, CSS, JavaScript',
        url: [
          {
            link: 'http://blog.poomgo.com',
            text: '품고 블로그.'
          }
        ]
      },
      {
        date: '2019.02 - 2019.06',
        title: 'Wrapsody eCo (Fasoo) 구축',
        description: '- 웹 퍼블리싱',
        skill: 'React, SCSS',
        url: [
          {
            link: 'https://www.fasoo.com/products/wrapsody-eco',
            text: '협업 플랫폼이라 소개 페이지 링크.'
          }
        ]
      },
      {
        date: '2019.05 - 2019.07',
        title: '화해 블로그 리뉴얼',
        description: '- 웹 퍼블리싱\n- 기능은 WordPress의 플러그인을 사용하고 JavaScript로 커스터마이징 했습니다.',
        skill: 'Wordpress, CSS, JavaScript',
        url: [
          {
            link: 'http://blog.hwahae.co.kr',
            text: '화해 블로그'
          }
        ]
      },
      {
        date: '2019.06 - 2019.08',
        title: '서울대학교 여성학 협동과정 홈페이지 리뉴얼',
        description: '- 웹 퍼블리싱',
        skill: 'Pug, CSS',
        url: [
          {
            link: 'http://52.78.116.48:8046',
            text: '서울대학교 여성학 협동과정 홈페이지'
          }
        ]
      },
      {
        date: '2019.10 - 2019.11',
        title: '한국도자문화원 홈페이지 구축',
        description: '- 웹 퍼블리싱',
        skill: 'HTML, CSS',
        url: [
          {
            link: 'http://www.kcci.kr',
            text: '한국도자문화원 홈페이지'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    color: '#ff5c36',
    title: '두핸즈',
    date: '2020.01 - 2021.03',
    description: 'Next.js를 활용하여 홈페이지 및 WMS 시스템 웹 퍼블리싱 구축과 일부 API 연동 작업 수행.\n펀딩 전문 물류 서비스 유지보수 담당.',
    content: 'React, Next.js으로 홈페이지 구축 및 WMS시스템(핸디봇) 퍼블리싱 업무를 했습니다.',
    projects: [
      {
        date: '2020.01 - 2021.03',
        title: '두윙 (단기 배송에 특화된 물류 서비스) 유지보수',
        description: '- 퍼블리싱 유지보수\n- 디버깅 (ex. 데이터가 없어서 화면에러, 상품 수정을 할 경우 오류 등..)',
        skill: 'Next.js, SCSS'
      },
      {
        date: '2020.02 - 2021.03',
        title: '핸디봇 (WMS 시스템) 구축',
        description: '- 퍼블리싱 100% (컴포넌트단위퍼블리싱)\n- api 호출 및 데이터 화면 연동 등 의 프론트 작업',
        skill: 'Next.js, SCSS'
      },
      {
        date: '2020.07 - 2020.09',
        title: '품고 홈페이지 리뉴얼',
        description: '- 외주받은 퍼블리싱 HTML -> React.js로 변환작업\n- Strapi로 문의하기 기능 관리',
        skill: 'Next.js, SCSS, Strapi',
        url: [
          {
            link: 'https://poomgo.com',
            text: '품고 홈페이지',
          }
        ]
      }
    ]
  },
  {
    id: 2,
    color: '#000',
    title: '브랜디',
    date: '2021.04.10 - 2023.07',
    description: 'Vue와 React를 활용한 웹 퍼블리싱 및 유지보수를 담당.\n디자인 시스템 구축을 수행.\n통합 주문 서비스 웹 프론트엔드 개발 담당.',
    content: '브랜디/하이버 웹 퍼블리싱 유지보수 업무, 웹디자인시스템 구축, 웹 통합주문 프론트 작업을 했습니다.\n2021년 04월 퍼블리셔로 입사하여 브랜디/하이버 웹 퍼블리싱 유지보수 업무, 웹디자인시스템 구축 업무를 했습니다.\n2022년 10월에 웹 프론트로 파트 이동하여 주로 웹 장바구니/주문/결제 프론트 업무를 했습니다.',
    projects: [
      {
        date: '2021.04 - 2023.04',
        title: '브랜디/하이버 웹 유지보수',
        description: '- 브랜디 웹,하이버 웹 퍼블리싱 유지보수',
        skill: 'Vue, SCSS'
      },
      {
        date: '2021.08 - 2022.11',
        title: '웹 디자인 시스템 구축',
        description: '- Input, Textarea, Modal 등 컴포넌트 제작\n-테마 적용 및 제작된컴 포넌트 개선, 신규 컴포넌트 제작',
        skill: 'React, SCSS'
      },
      {
        date: '2021.12 - 2022.03',
        title: '플레어 웹 구축',
        description: '- 디자인시스템을 사용해 퍼블리싱 작업 (메인, 장바구니, 주문서, 회원가입, 회원탈퇴 페이지 ) - 퍼블리싱\n- 앱링크를 위한 스마트스크립트 구현\n- 서비스 변경되면서 피봇팅 퍼블리싱 작업',
        skill: 'Next.js, SCSS'
      },
      {
        date: '2022.06 - 2023.05',
        title: '브랜디/통합주문 웹 프론트 개발',
        description: '- 통합주문(React) 서비스 개발: 각 서비스의 주문을 통합관리하는 서비스 오픈 및 유지보수',
        skill: 'React, Recoil, SWR',
        url: [
          {
            link: 'https://www.brandi.co.kr',
            text: '브랜디'
          },
          {
            link: 'https://www.hiver.co.kr',
            text: '하이버'
          },
          {
            link: 'https://www.selpi.co.kr',
            text: '셀피'
          }
        ]
      },
    ]
  },
  {
    id: 3,
    color: '#0b572b',
    title: '컬티랩스',
    date: '2023.10 - 재직중',
    description: 'HTML, CSS, JavaScript를 활용한 스마트팜 관련 웹 프론트엔드 개발을 담당.\n Flutter를 활용한 앱 개발과 유지보수 및 기능 개선을 수행.',
    content: '스마트팜 관련 웹·앱 개발 및 유지보수를 진행했습니다.\nFlutter와 웹 기술(HTML, CSS, JavaScript, Next.js 등)을 활용한 다양한 프로젝트를 수행했습니다.\n센서·위젯 관리, CRUD 기능 구현, 다국어 지원, UI 개선 등 전반적인 프론트엔드 개발을 담당했습니다.\n또한, 웹 프론트엔드 개발자로서 Flutter 앱 개발에도 도전하며 기술 확장을 이어가고 있습니다.',
    projects: [
      {
        date: '2023.10 - 2023.12',
        title: '컬티매니저 웹 프론트 개발',
        description: '- 온실관리, 생산시설관리, 작업지시 기능에 추가 옵션 기능 개발',
        skill: 'HTML, CSS, JavaScript'
      },
      {
        date: '2023.11 - 2023.11',
        title: '컬티트레이너 웹 프론트 개발',
        description: '- 농장 정보, 온실정보, 작물정보 CRUD',
        skill: 'HTML, CSS, JavaScript'
      },
      {
        date: '2024.02 - 2024.04',
        title: '컬티랩스 홈페이지 웹 프론트 개발',
        description: '- HTML, CSS, JavaScript 퍼블 외주 받은 작업 Next.js로 변환.\n- 클라이언트, 어드민 따로 만들어진 프로젝트 하나로 병합.\n- 기타버그수정(게시판 CRUD 기능 오류,반응형 대응, 영문번역추가 등)',
        skill: 'Next.js, CSS'
      },
      {
        date: '2024.03 - 2024.08',
        title: '컬티그로스 (작물 생육정보 수집/분석 시스템) 웹 프론트 개발',
        description: '- 생육측정 사진 전체 조회 및 다운로드 기능 개발\n-유지보수(작물 생육측정 옵션 수정, 디버깅, UI개선, 다국어 작업 등)',
        skill: 'HTML, CSS, JavaScript'
      },
      {
        date: '2024.01 - ing',
        title: '컬티데이터 (스마트팜 재배데이터 통합 모니터링 서비스) 웹 프론트 개발',
        description: '- 인도네시아 버전, 한국 버전 2가지 시스템 유지보수 및 추가 개발\n- 추가개발: 센서, 위젯, 예찰조사 CRUD 등.. 구현\n- 유지보수:차트오류,UI개선요청등..수정',
        skill: 'HTML, CSS, JavaScript'
      },
      {
        date: '2024.07 - 2025.02',
        title: '컬티데이터 앱 개발',
        description: '- 컬티데이터 웹 기반으로 앱 개발\n(웹 프론트엔드 개발자로서 Flutter 앱 개발에 도전했으며, 병행된 업무로 인해 개발 기간이 길어졌지만 Appstore, GooglePlayStore에 오픈 되었습니다.)',
        skill: 'Flutter'
      },
      {
        date: '2025.02 - ing',
        title: '컬티데이터 앱 리뉴얼',
        description: '- 환경데이터 조회 하면 리뉴얼.\n(기존 대시보드 기능 제거 및 신규 데이터 조회 기능 추가 및 전반적인 UI 리뉴얼)',
        skill: 'Flutter'
      },
    ]
  },
];

export default career;
