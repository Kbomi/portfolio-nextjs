// Short, continuous turns. These clips share the same neutral first frame.
export const TURN_FRAMES = {left:25,right:19,pan:27};
export class HeroInteraction {
  zone=null;
  pointerX=null;
  side=null;
  position=0;
  crossing=null;
  greeting=null;
  dwell=0;
  armed=true;
  forced=false;
  reset() {
    this.zone=null;this.pointerX=null;this.side=null;this.position=0;this.crossing=null;this.greeting=null;
    this.dwell=0;this.armed=true;this.forced=false;
  }
  pointer(x) {
    let next=x===null?null:x<.34?'left':x>.66?'right':'center';
    if(this.zone==='left' && x!==null && x<.37)next='left';
    if(this.zone==='right' && x!==null && x>.63)next='right';
    if(next==='center' && x!==this.pointerX)this.dwell=0;
    this.pointerX=x;
    if(next!==this.zone){this.dwell=0;this.forced=false;if(next!=='center')this.armed=true;}
    this.zone=next;
  }
  greet() {
    this.zone='center';this.forced=true;
    if(this.greeting!==null)return;
    this.armed=true;this.dwell=500;
  }
  get gaze() {if(this.crossing!==null)return this.crossing<=10?-1+this.crossing/10:(this.crossing-10)/16;return this.side?(this.side==='left'?-1:1)*this.position/(TURN_FRAMES[this.side]-1):0;}
  needsFrame() {
    if(this.crossing!==null)return true;
    if(this.greeting!==null)return this.zone!=='center'||this.greeting<87;
    if(this.side)return this.position!==(this.zone===this.side?TURN_FRAMES[this.side]-1:0);
    return this.zone==='left'||this.zone==='right'||(this.zone==='center'&&this.armed);
  }
  update(delta) {
    if(this.zone==='center')this.dwell+=delta;
    if(this.greeting!==null){
      const forward=this.zone==='center';
      this.greeting=Math.max(0,Math.min(87,this.greeting+delta*(forward?.03:-.06)));
      if(this.greeting>0 || forward){
        const frame=this.greeting<.5?19:Math.min(150,63+Math.round(this.greeting));
        return {kind:'greeting',source:'original',index:frame,zone:'center',message:!forward?'':frame>=139?'아래에서 제 작업을 만나보세요':frame>=113?'반가워요!':frame>=80?'앗, 오셨군요!':''};
      }
      this.greeting=null;
    }
    // Reuse the native left-to-right turn, rather than joining two neutral returns.
    if(this.crossing===null && this.side && this.position===TURN_FRAMES[this.side]-1 &&
      ((this.side==='left'&&this.zone==='right')||(this.side==='right'&&this.zone==='left'))){
      this.crossing=this.side==='left'?0:26;this.side=null;this.position=0;
    }
    if(this.crossing!==null){
      const target=this.zone==='left'?0:this.zone==='right'?26:10;
      const step=delta*.06;
      this.crossing=target>this.crossing?Math.min(target,this.crossing+step):Math.max(target,this.crossing-step);
      const index=1+Math.round(this.crossing);
      if(this.crossing===target){
        this.crossing=null;
        if(this.zone==='left'||this.zone==='right'){
          this.side=this.zone;this.position=TURN_FRAMES[this.side]-1;
        } else return {kind:'pose',source:'original',index:19,zone:this.zone??'idle',message:''};
      }
      return {kind:'turn',source:'pan',index,zone:this.zone??'idle',message:this.zone==='left'?'왼쪽에 계셨네요!':this.zone==='right'?'오른쪽에 계셨네요!':''};
    }
    if(!this.side && (this.zone==='left'||this.zone==='right')){this.side=this.zone;this.position=0;}
    if(this.side){
      const side=this.side;
      // A short central crossing must not start an unrelated return or greeting.
      if(this.zone==='center' && this.dwell<140 && this.position===TURN_FRAMES[side]-1){
        return {kind:'turn',source:side,index:TURN_FRAMES[side],zone:side,message:side==='left'?'왼쪽에 계셨네요!':'오른쪽에 계셨네요!'};
      }
      const target=this.zone===side?TURN_FRAMES[side]-1:0;
      const step=delta*.06;
      this.position=target>this.position?Math.min(target,this.position+step):Math.max(target,this.position-step);
      if(this.position===0 && this.zone!==side){
        this.side=null;
        return {kind:'pose',source:'original',index:19,zone:this.zone??'idle',message:''};
      }
      return {kind:'turn',source:side,index:1+Math.round(this.position),zone:side,message:side==='left'?'왼쪽에 계셨네요!':'오른쪽에 계셨네요!'};
    }
    if(this.zone==='center' && this.armed && (this.forced||this.dwell>=500)){
      this.greeting=0;this.armed=false;this.forced=false;
    }
    return {kind:'pose',source:'original',index:19,zone:this.zone??'idle',message:''};
  }
}
