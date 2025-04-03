export interface SideProjectProps {
  id: number;
  title: string;
  description: string;
  skill: string;
  image: string;
}

const sideProjects: SideProjectProps[] = [
  {
    id: 0,
    title: '소통사전',
    description: '신조어 검색으로 컨셉으로 만든 검색 사이트.',
    skill: 'HTML, CSS, JavaScript',
    image: '/sideproject/dictionary.png',
  },
  {
    id: 1,
    title: '숫자 야구게임',
    description: '숫자 야구게임을 할 수 있는 사이트.',
    skill: 'HTML, CSS, JavaScript',
    image: '/sideproject/baseball.png',
  },
  {
    id: 2,
    title: '헌팅여지도',
    description: '헌팅으로 유명한 술집 위치를 표기한 지도.',
    skill: 'React',
    image: '/sideproject/map.png',
  },
  {
    id: 3,
    title: '오산힐스테이트 주변 정보',
    description: '힐스테이트 오산더퍼스트 근처 정보를 제공하는 웹 사이트.',
    skill: 'React',
    image: '/sideproject/osan.png',
  },
  {
    id: 4,
    title: '출산 & 육아휴직 계산기',
    description: '출산휴가 날짜, 육아휴직 날짜와 급여를 미리 계산 해보는 웹 사이트.',
    skill: 'HTML, CSS, JavaScript',
    image: '/sideproject/baby.png',
  }
];

export default sideProjects;
