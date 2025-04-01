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
    description: '웹 프론트엔드 개발자',
  },
  {
    id: 1,
    color: '#000',
    title: '브랜디',
    date: '2021.04.10 - 2023.07',
    description: '웹 프론트엔드 개발자',
  },
  {
    id: 2,
    color: '#ff5c36',
    title: '두핸즈',
    date: '2020.01 - 2021.03',
    description: '웹 퍼블리셔',
  },
  {
    id: 3,
    color: '#0039a6',
    title: '김지민앤컴퍼니',
    date: '2018.09 - 2020.01',
    description: '웹 퍼블리셔',
  },
];

export default career;
