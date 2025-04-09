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
  {
    id: 0,
    title: '소통사전',
    description: '신조어 검색으로 컨셉으로 만든 검색 사이트.',
    skill: 'HTML, CSS, JavaScript',
    thumb: '/sideproject/dictionary_thumb.webp',
    image: '/sideproject/dictionary.webp',
    link: 'https://www.kko-kkuri.com/new-dictionary',
    content: '신조어를 어려워하는 어른이들을 위해 신조어 검색이라는 컨셉을 잡아 만들었습니다.\n네이버 검색 API를 활용했습니다.\nAPI 문서를 보고 요약된 뜻과 참고할 수 있는 웹 문서 링크도 추가하였습니다.',
  },
  {
    id: 1,
    title: '숫자 야구게임',
    description: '숫자 야구게임을 할 수 있는 사이트.',
    skill: 'HTML, CSS, JavaScript',
    thumb: '/sideproject/baseball_thumb.webp',
    image: '/sideproject/baseball.webp',
    link: 'https://www.kko-kkuri.com/baseball-game',
    content: '운영중인 블로그에 숫자 야구게임을 할 수 있는 페이지를 추가했습니다.',
  },
  {
    id: 2,
    title: '헌팅여지도',
    description: '헌팅으로 유명한 술집 위치를 표기한 지도.',
    skill: 'React',
    thumb: '/sideproject/map.webp',
    image: '/sideproject/map.webp',
    link: 'https://hunting-map.vercel.app',
    content: '유튜버 ‘폭스클럽’의 술집·헌팅 관련 콘텐츠를 재미있게 보면서, ‘헌팅여지도’라는 말에서 영감을 받아 사이트를 제작하게 되었습니다.\n\n어느 술집이 헌팅으로 유명한지, 인기가 많은 곳은 어디인지 쉽게 볼 수 있는 사이트가 있으면 좋겠다고 생각해 홍대와 강남 지역을 중심으로 정보를 정리했습니다.\n앞으로 더 많은 지역과 실시간 데이터 제공 등으로 확장해보고 싶은 개인 프로젝트입니다.',
  },
  {
    id: 3,
    title: '오산힐스테이트 주변 정보',
    description: '힐스테이트 오산더퍼스트 근처 정보를 제공하는 웹 사이트.',
    skill: 'React',
    thumb: '/sideproject/osan.webp',
    image: '/sideproject/osan.webp',
    link: 'https://osanhillstate.kko-kkuri.com',
    content: '아무런 연고 없이 오산에 오게 되어 집 주변 정보를 찾기 어려웠던 경험을 계기로, 아파트 주민들이 공유하는 생활 정보를 한 눈에 볼 수 있도록 정리하는 사이트를 직접 제작하였습니다.',
  },
  {
    id: 4,
    title: '출산 & 육아휴직 계산기',
    description: '출산휴가 날짜, 육아휴직 날짜와 급여를 미리 계산 해보는 웹 사이트.',
    skill: 'HTML, CSS, JavaScript',
    thumb: '/sideproject/baby.webp',
    image: '/sideproject/baby.webp',
    link: 'https://babycalc.kko-kkuri.com',
    content: '임신과 출산을 준비하며 관련 정보가 흩어져 있어 불편함을 느꼈고, 이를 계기로 출산·육아휴직 기간과 급여 정보를 쉽고 빠르게 확인할 수 있는 사이트를 제작하였습니다.\n\n사용자가 출산휴가 시작일만 입력하면 자동으로 종료일과 육아휴직 기간을 계산해주며, 급여 계산은 개인 상황에 맞게 세부 옵션을 설정할 수 있도록 구성하였습니다.',
  }
];

export default sideProjects;
