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

function Device({ kind, first, next, className }: { kind: "monitor" | "phone"; first: string; next: string; className: string }) {
  return (
    <div className={`scene-device scene-${kind} ${className}`} aria-hidden="true">
      <div className="device-solid">
        <div className="device-back" />
        <div className="device-edge edge-left" /><div className="device-edge edge-right" />
        <div className="device-edge edge-top" /><div className="device-edge edge-bottom" />
        <div className="device-front">
          <div className="device-screen">
            <Image src={`${root}${first}.webp`} alt="" fill sizes="(max-width: 639px) 50vw, 460px" className="device-screen-first" />
            <Image src={`${root}${next}.webp`} alt="" fill sizes="(max-width: 639px) 50vw, 460px" className="device-screen-next" />
          </div>
          <div className="device-glare" />
        </div>
      </div>
      {kind === "monitor" && <><div className="monitor-neck" /><div className="monitor-foot" /></>}
    </div>
  );
}

export default function WorkScreens({ index }: { index: number }) {
  return (
    <div className="scene-visual">
      <div className="scene-orbit" aria-hidden="true" />
      <div className="scene-ground" aria-hidden="true" />
      {index === 0 ? (
        <>
          <Device kind="monitor" first="culti-dashboard" next="culti-intro" className="culti-monitor" />
          <Device kind="phone" first="culti-widgets" next="culti-sensor" className="culti-mobile" />
          <p className="scene-device-label"><span className="scene-label-first">웹에서 재배 데이터를 더 명확하게.</span><span className="scene-label-next">Flutter 앱으로 조회 경험을 확장하다.</span></p>
        </>
      ) : (
        <>
          <Device kind="phone" first="bubu-launch-home" next="bubu-splash" className="bubu-device-one" />
          <Device kind="phone" first="bubu-launch-signal" next="bubu-invitation" className="bubu-device-two" />
          <Image src="/featured/bubu-characters.png" alt="" width={220} height={220} className="scene-character" />
          <p className="scene-device-label"><span className="scene-label-first">부부10분 · 2026.09 출시 화면</span><span className="scene-label-next">부부사이 · 업데이트 개발 중 화면</span></p>
        </>
      )}
    </div>
  );
}
