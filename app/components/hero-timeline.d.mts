export type Zone = 'left' | 'center' | 'right';
export const TURN_FRAMES: {left:number;right:number;pan:number};
export type HeroState = {kind:'pose'|'turn'|'greeting';source:'original'|'left'|'right'|'pan';index:number;zone:Zone|'idle';message:string};
export class HeroInteraction {
  zone:Zone|null;
  pointerX:number|null;
  side:'left'|'right'|null;
  position:number;
  crossing:number|null;
  greeting:number|null;
  dwell:number;
  armed:boolean;
  forced:boolean;
  readonly gaze:number;
  pointer(x:number|null):void;
  greet():void;
  reset():void;
  needsFrame():boolean;
  update(delta:number):HeroState;
}
