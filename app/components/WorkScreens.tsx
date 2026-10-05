import Image from "next/image";

const root = "/featured/screens/";
export const workScreens = [
  [
    { file: "culti-intro", label: "서비스 소개", status: "WEB", width: 2858, height: 1328 },
    { file: "culti-dashboard", label: "대시보드 차트 위젯", status: "WEB", width: 1397, height: 1214 },
    { file: "culti-widgets", label: "위젯 종류 선택", status: "APP", width: 1170, height: 2532 },
    { file: "culti-sensor", label: "센서 상세 차트", status: "APP", width: 1170, height: 2532 },
  ],
  [
    { file: "bubu-launch-home", label: "하루 기록과 시그널 홈", status: "부부10분 · 출시", width: 1320, height: 2868 },
    { file: "bubu-launch-signal", label: "시그널 알림 예시", status: "부부10분 · 출시", width: 1320, height: 2868 },
    { file: "bubu-launch-day", label: "하루 기록과 공유", status: "부부10분 · 출시", width: 1320, height: 2868 },
    { file: "bubu-splash", label: "스플래시", status: "부부사이 · 개발 중", width: 1206, height: 2622 },
    { file: "bubu-invitation", label: "배우자 연결", status: "부부사이 · 개발 중", width: 390, height: 844 },
  ],
];

export function WorkScreenGallery({ index }: { index: number }) {
  return (
    <div className="work-screen-gallery">
      {workScreens[index].map((screen) => (
        <figure key={screen.file}>
          <div className="work-screen-image">
            <Image src={`${root}${screen.file}.webp`} alt={screen.label} width={screen.width} height={screen.height} sizes="(max-width: 639px) 80vw, 360px" className="h-auto w-full" />
          </div>
          <figcaption><span>{screen.status}</span>{screen.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function WorkScreens({ index }: { index: number }) {
  return (
    <div className={`showcase-visual ${index === 0 ? "showcase-culti" : "showcase-bubu"}`}>
      <div className="showcase-visual-heading">
        <p>{index === 0 ? "SMART FARM / WEB → APP" : "DAILY CONNECTION / FLUTTER"}</p>
        <h4>{index === 0 ? "데이터를 더 명확하게." : "우리 둘을 더 가깝게."}</h4>
      </div>
      {index === 0 ? (
        <div className="showcase-collage">
          <div className="showcase-browser">
            <div aria-hidden="true" className="browser-dots"><i /><i /><i /><span>CultiData</span></div>
            <Image src={`${root}culti-dashboard.webp`} alt="컬티데이터 웹 대시보드의 차트 위젯" width={1397} height={1214} sizes="(max-width: 767px) 90vw, 560px" className="h-auto w-full" />
          </div>
          <div className="showcase-phone culti-phone"><Image src={`${root}culti-widgets.webp`} alt="컬티데이터 Flutter 앱의 위젯 종류 선택 화면" width={1170} height={2532} sizes="(max-width: 767px) 32vw, 160px" className="h-auto w-full" /></div>
          <div className="showcase-caption">웹 운영 경험을 모바일로 확장하다.</div>
        </div>
      ) : (
        <div className="showcase-collage">
          <div className="showcase-phone bubu-phone-back"><Image src={`${root}bubu-splash.webp`} alt="개발 중인 부부사이 스플래시 화면" width={1206} height={2622} sizes="(max-width: 767px) 42vw, 210px" className="h-auto w-full" /></div>
          <div className="showcase-phone bubu-phone-front"><Image src={`${root}bubu-invitation.webp`} alt="개발 중인 부부사이 배우자 연결 화면" width={390} height={844} sizes="(max-width: 767px) 40vw, 200px" className="h-auto w-full" /></div>
          <div className="showcase-caption">부부10분 출시 → 부부사이 개발 중</div>
        </div>
      )}
    </div>
  );
}
