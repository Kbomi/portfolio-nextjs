export interface SideProjectProps {
  id: number;
  title: string;
  description: string;
  skill: string;
  thumb: string;
  image: string;
  link: string;
  content: string;
}

const sideProjects: SideProjectProps[] = [
  // {
  //   id: 0,
  //   title: "소통사전",
  //   description: "신조어 검색으로 컨셉으로 만든 검색 사이트.",
  //   skill: "HTML, CSS, JavaScript",
  //   thumb: "/sideproject/dictionary_thumb.webp",
  //   image: "/sideproject/dictionary.webp",
  //   link: "https://www.kko-kkuri.com/new-dictionary",
  //   content:
  //     "신조어를 어려워하는 어른이들을 위해 신조어 검색이라는 컨셉을 잡아 만들었습니다.\n네이버 검색 API를 활용했습니다.\nAPI 문서를 보고 요약된 뜻과 참고할 수 있는 웹 문서 링크도 추가하였습니다.",
  // },
  // {
  //   id: 1,
  //   title: '숫자 야구게임',
  //   description: '숫자 야구게임을 할 수 있는 사이트.',
  //   skill: 'HTML, CSS, JavaScript',
  //   thumb: '/sideproject/baseball_thumb.webp',
  //   image: '/sideproject/baseball.webp',
  //   link: 'https://www.kko-kkuri.com/baseball-game',
  //   content: '운영중인 블로그에 숫자 야구게임을 할 수 있는 페이지를 추가했습니다.',
  // },
  // {
  //   id: 2,
  //   title: "헌팅여지도",
  //   description: "헌팅으로 유명한 술집 위치를 표기한 지도.",
  //   skill: "React",
  //   thumb: "/sideproject/map.webp",
  //   image: "/sideproject/map.webp",
  //   link: "https://hunting-map.vercel.app",
  //   content:
  //     "유튜버 ‘폭스클럽’의 술집·헌팅 관련 콘텐츠를 재미있게 보면서, ‘헌팅여지도’라는 말에서 영감을 받아 사이트를 제작하게 되었습니다.\n\n어느 술집이 헌팅으로 유명한지, 인기가 많은 곳은 어디인지 쉽게 볼 수 있는 사이트가 있으면 좋겠다고 생각해 홍대와 강남 지역을 중심으로 정보를 정리했습니다.\n앞으로 더 많은 지역과 실시간 데이터 제공 등으로 확장해보고 싶은 개인 프로젝트입니다.",
  // },
  // {
  //   id: 3,
  //   title: "오산힐스테이트 주변 정보",
  //   description: "힐스테이트 오산더퍼스트 근처 정보를 제공하는 웹 사이트.",
  //   skill: "React",
  //   thumb: "/sideproject/osan.webp",
  //   image: "/sideproject/osan.webp",
  //   link: "https://osanhillstate.kko-kkuri.com",
  //   content:
  //     "아무런 연고 없이 오산에 오게 되어 집 주변 정보를 찾기 어려웠던 경험을 계기로, 아파트 주민들이 공유하는 생활 정보를 한 눈에 볼 수 있도록 정리하는 사이트를 직접 제작하였습니다.",
  // },
  {
    id: 4,
    title: "출산 & 육아휴직 계산기",
    description:
      "출산휴가 날짜, 육아휴직 날짜와 급여를 미리 계산해보는 웹 사이트.",
    skill: "HTML, CSS, JavaScript",
    thumb: "/sideproject/baby.webp",
    image: "/sideproject/baby.webp",
    link: "https://babycalc.kko-kkuri.com",
    content:
      "임신과 출산을 준비하며 관련 정보가 흩어져 있어 불편함을 느꼈고, 이를 계기로 출산·육아휴직 기간과 급여 정보를 쉽고 빠르게 확인할 수 있는 사이트를 제작하였습니다.\n\n사용자가 출산휴가 시작일만 입력하면 자동으로 종료일과 육아휴직 기간을 계산해주며, 급여 계산은 개인 상황에 맞게 세부 옵션을 설정할 수 있도록 구성하였습니다.",
  },
  {
    id: 5,
    title: "BMI/BMR 계산기",
    description: "간단한 정보를 입력하면 BMI와 BMR을 계산해주는 웹 사이트.",
    skill: "React, TypeScript",
    thumb: "/sideproject/health.webp",
    image: "/sideproject/health.webp",
    link: "https://health.kko-kkuri.com",
    content:
      "Gemini CLI를 활용해 React, TypeScript 기반의 BMI/BMR 계산기를 빠르게 구현해본 사이드 프로젝트입니다.\n\n기본 계산 기능을 만든 뒤 다국어, 다크모드, UI 개선 작업을 추가로 진행해 배포했습니다.",
  },
  // {
  //   id: 6,
  //   title: "에이노트 (AI Note)",
  //   description: "AI가 당신의 하루를 분석하고 기록해주는 스마트 AI 일기장.",
  //   skill: "Next.js, TypeScript, Supabase, Google Gemini API, Tailwind CSS",
  //   thumb: "/sideproject/ainote.webp",
  //   image: "/sideproject/ainote.webp",
  //   link: "https://ainote.kko-kkuri.com",
  //   content:
  //     "사용자가 하루의 일상을 기록하면 Google Gemini AI가 내용을 분석해 감정 리포트를 생성하고, 내일의 할 일을 제안해주는 서비스입니다.\n\n단순한 일기장을 넘어 유저의 데이터를 기반으로 한 개인화된 피드백을 제공하는 데 집중했습니다.\nSupabase를 활용해 구글·카카오 소셜 로그인을 구현했습니다.",
  // },
  {
    id: 7,
    title: "생활계획표",
    description: "귀여운 스티커로 꾸밀 수 있는 생활계획표 웹 사이트.",
    skill: "Next.js, TypeScript, Tailwind CSS",
    thumb: "/sideproject/plan.webp",
    image: "/sideproject/plan.webp",
    link: "https://plan.kko-kkuri.com",
    content:
      "어릴 때 방학 숙제처럼 그리던 생활계획표가 생각나서 가볍게 만들어본 웹 사이트입니다.\n\n사용자가 시간 구간과 활동명을 입력하면 원형 시계 미리보기에 바로 반영되고, 스티커로 꾸밀 수 있도록 구성했습니다.\n\nSVG 기반으로 시간 구간을 원형 조각으로 표현하고, 30분 단위 시간 선택과 구간 중복 검사를 적용했습니다. 완성한 계획표는 이미지로 저장하거나 프린트할 수 있도록 설계했습니다.",
  },
  {
    id: 8,
    title: "체질핏",
    description: "사상체질 기반 식단/생활 정보를 가볍게 확인하는 웹 서비스.",
    skill: "Next.js, TypeScript",
    thumb: "/sideproject/fit.webp",
    image: "/sideproject/fit.webp",
    link: "https://fit.kko-kkuri.com",
    content:
      "토스 미니앱 출시를 염두에 두고 만든 실험형 웹 서비스입니다.\n\n사상체질 기반 식단과 생활 정보를 사용자가 쉽게 확인할 수 있도록 구성했고, 작은 기능 단위로 빠르게 구현하며 서비스 흐름을 검증했습니다.",
  },
  {
    id: 9,
    title: "또구니-음성으로 메모하는 앱",
    description:
      "음성으로 장보기 항목을 추가하고 위젯으로 확인할 수 있는 Flutter 메모 앱.",
    skill: "Flutter, Speech to Text, Home Widget, Siri Shortcut, Bixby",
    thumb: "/sideproject/guni.webp",
    image: "/sideproject/guni.webp",
    link: "https://kko-kkuri.com/%eb%98%90%ea%b5%ac%eb%8b%88-%ec%9d%8c%ec%84%b1%ec%9c%bc%eb%a1%9c-%ec%93%b0%eb%8a%94-%ec%8a%a4%eb%a7%88%ed%8a%b8-%ec%9e%a5%eb%b0%94%ea%b5%ac%eb%8b%88-%eb%a9%94%eb%aa%a8",
    content:
      'AI 바이브 코딩으로 시작한 Flutter 메모 앱입니다.\n말로 장보기 항목을 추가하고, 앱과 홈 화면 위젯에서 확인할 수 있도록 구성했습니다.\n\n특히 Siri 단축어 등록과 Bixby 음성 호출 연동을 중점적으로 다듬었습니다. 사용자가 "똑똑이한테 추가해줘"처럼 말하면 항목을 앱에 추가할 수 있도록 호출 문구와 음성 명령 처리 흐름을 조정했습니다.\n\nAI가 생성한 코드를 그대로 두지 않고, 실제 기기에서 동작을 확인하며 음성 호출, 위젯 표시, 안내 화면을 반복적으로 수정했습니다.',
  },
];

export default sideProjects;
