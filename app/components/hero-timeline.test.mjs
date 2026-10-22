import {test} from 'node:test';
import assert from 'node:assert/strict';
import {HeroInteraction} from './hero-timeline.mjs';
const advance=(hero,ms)=>{let state;for(let t=0;t<ms;t+=1000/60)state=hero.update(1000/60);return state;};
test('left turn plays every consecutive motion frame and stops with eyes open',()=>{
 const h=new HeroInteraction();h.pointer(.1);const frames=[];
 for(let i=0;i<30;i++){const s=h.update(1000/60);if(s.source==='left')frames.push(s.index);}
 for(let i=1;i<frames.length;i++)assert.ok(frames[i]-frames[i-1]<=1);
 assert.equal(frames.at(-1),25); assert.equal(h.needsFrame(),false);
 assert.equal(advance(h,3000).index,25);
});
test('rapid direction changes rewind current turn before starting the other side',()=>{
 const h=new HeroInteraction();h.pointer(.1);advance(h,200);h.pointer(.9);
 const seen=[];for(let i=0;i<50;i++)seen.push(h.update(1000/60));
 const firstRight=seen.findIndex(s=>s.source==='right');assert.ok(firstRight>0);
 assert.ok(seen.slice(0,firstRight).some(s=>s.source==='original'&&s.index===19));
 assert.equal(seen.at(-1).source,'right');assert.equal(seen.at(-1).index,19);
});
test('moving within a zone does not scrub or restart the turn',()=>{
 const h=new HeroInteraction();h.pointer(.1);advance(h,600);h.pointer(.2);
 assert.equal(h.update(16).index,25);assert.equal(h.needsFrame(),false);
});
test('center requires a short dwell and preserves the provided gesture order',()=>{
 const h=new HeroInteraction();h.pointer(.5);assert.notEqual(advance(h,300).kind,'greeting');
 advance(h,300);const frames=[];for(let i=0;i<200;i++)frames.push(h.update(1000/60).index);
 assert.ok(frames.indexOf(91)<frames.indexOf(113));assert.ok(frames.indexOf(113)<frames.indexOf(139));
 assert.equal(frames.at(-1),150);assert.equal(h.needsFrame(),false);
});
test('leaving greeting reverses continuously instead of jumping to a different pose',()=>{
 const h=new HeroInteraction();h.greet();advance(h,1800);const before=h.update(0).index;
 h.pointer(.1);const after=h.update(1000/60);assert.equal(after.kind,'greeting');assert.ok(before-after.index<=2);
 const end=advance(h,3000);assert.equal(end.source,'left');assert.equal(end.index,25);
});
test('mobile tap starts greeting and neutral reset stops all animation',()=>{
 const h=new HeroInteraction();h.greet();assert.equal(advance(h,100).kind,'greeting');
 h.reset();assert.equal(h.update(16).index,19);assert.equal(h.needsFrame(),false);
});
test('held left-to-right uses a direct continuous pan without a neutral stop',()=>{
 const h=new HeroInteraction();h.pointer(.1);advance(h,600);h.pointer(.9);
 const frames=[];for(let i=0;i<26;i++)frames.push(h.update(1000/60));
 assert.ok(frames.every(s=>s.source==='pan'));
 for(let i=1;i<frames.length;i++)assert.equal(frames[i].index-frames[i-1].index,1);
 assert.equal(advance(h,300).source,'right');
});
test('reversing during a direct pan immediately reverses the same continuous clip',()=>{
 const h=new HeroInteraction();h.pointer(.1);advance(h,600);h.pointer(.9);
 advance(h,150);const before=h.update(0);h.pointer(.1);const after=h.update(1000/60);
 assert.equal(before.source,'pan');assert.equal(after.source,'pan');assert.ok(after.index<before.index);
 assert.equal(advance(h,600).source,'left');
});
test('passing through center briefly does not insert a greeting',()=>{
 const h=new HeroInteraction();h.pointer(.1);advance(h,600);h.pointer(.5);advance(h,80);h.pointer(.9);
 assert.equal(h.update(1000/60).source,'pan');
 const states=[];for(let i=0;i<80;i++)states.push(h.update(1000/60));
 assert.ok(states.every(s=>s.kind!=='greeting'));assert.equal(states.at(-1).source,'right');
});
test('a slow continuous cursor crossing does not stop at center or trigger greeting',()=>{
 const h=new HeroInteraction();h.pointer(.1);advance(h,600);
 for(const x of [.4,.43,.46,.49,.52,.55,.58,.61]){
  h.pointer(x);const state=advance(h,100);
  assert.equal(state.source,'left');assert.equal(state.index,25);
 }
 h.pointer(.9);assert.equal(h.update(1000/60).source,'pan');
});
