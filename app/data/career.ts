export interface CareerProps {
  id: number;
  color: string;
  title: string;
  date: string;
  description: string;
}

const career: CareerProps[] = [
  {
    id: 0,
    color: '#0b572b',
    title: '컬티랩스',
    date: '2023.10 - 재직중',
    description: 'HTML, CSS, JavaScript를 활용한 스마트팜 관련 웹 프론트엔드 개발을 담당.\n Flutter를 활용한 앱 개발과 유지보수 및 기능 개선을 수행.',
  },
  {
    id: 1,
    color: '#000',
    title: '브랜디',
    date: '2021.04.10 - 2023.07',
    description: 'Vue와 React를 활용한 웹 퍼블리싱 및 유지보수를 담당.\n디자인 시스템 구축을 수행.\n통합 주문 서비스 웹 프론트엔드 개발 담당.',
  },
  {
    id: 2,
    color: '#ff5c36',
    title: '두핸즈',
    date: '2020.01 - 2021.03',
    description: 'Next.js를 활용하여 홈페이지 및 WMS 시스템 웹 퍼블리싱 구축과 일부 API 연동 작업 수행.\n펀딩 전문 물류 서비스 유지보수 담당.',
  },
  {
    id: 3,
    color: '#0039a6',
    title: '김지민앤컴퍼니',
    date: '2018.09 - 2020.01',
    description: '웹 에이전시에서 다양한 환경에서 퍼블리싱 업무를 수행.\nWordPress, Pug, HTML, CSS 등을 활용해 여러 웹사이트와 블로그를 구축 및 리뉴얼.',
  },
];

export default career;
