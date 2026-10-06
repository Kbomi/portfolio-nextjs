"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// The character is modeled from geometry, so every angle has a real surface.
export default function HeroCharacter() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, .1, 100);
    camera.position.set(0, 2.5, 8.8);
    camera.lookAt(0, 1.35, 0);
    scene.add(new THREE.HemisphereLight(0xfff7e9, 0x64755c, 3));
    const key = new THREE.DirectionalLight(0xffefd8, 4); key.position.set(-3, 5, 5); scene.add(key);
    const rim = new THREE.DirectionalLight(0xdcebc7, 2); rim.position.set(4, 3, -3); scene.add(rim);
    const model = new THREE.Group(); scene.add(model);
    const materials = {
      skin: new THREE.MeshStandardMaterial({ color: 0xe8b995, roughness: .75 }),
      hair: new THREE.MeshStandardMaterial({ color: 0x28252c, roughness: .65 }),
      pink: new THREE.MeshStandardMaterial({ color: 0xcf8590, roughness: .85 }),
      pants: new THREE.MeshStandardMaterial({ color: 0x444254, roughness: .85 }),
      metal: new THREE.MeshStandardMaterial({ color: 0x6b7866, roughness: .4, metalness: .45 }),
      cream: new THREE.MeshStandardMaterial({ color: 0xe2d7b7, roughness: .8 }),
      screen: new THREE.MeshStandardMaterial({ color: 0x253f35, roughness: .5 }),
      white: new THREE.MeshStandardMaterial({ color: 0xfaf7ee, roughness: .7 }),
    };
    const sphere = (x:number,y:number,z:number,sx:number,sy:number,sz:number,mat:THREE.Material) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 24), mat);
      mesh.position.set(x,y,z); mesh.scale.set(sx,sy,sz); model.add(mesh); return mesh;
    };
    const box = (x:number,y:number,z:number,w:number,h:number,d:number,mat:THREE.Material) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat); mesh.position.set(x,y,z); model.add(mesh); return mesh;
    };
    const limb = (a:THREE.Vector3,b:THREE.Vector3,r:number,mat:THREE.Material) => {
      const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(r,a.distanceTo(b),8,16),mat);
      mesh.position.copy(a).add(b).multiplyScalar(.5);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),b.clone().sub(a).normalize()); model.add(mesh);
    };
    // Rounded seated silhouette, ponytail, glasses and a working laptop.
    sphere(0,1.65,0,.5,.65,.32,materials.pink);
    sphere(0,2.66,.03,.59,.69,.52,materials.skin);
    sphere(0,2.96,-.15,.62,.48,.53,materials.hair);
    sphere(-.33,2.96,.3,.35,.25,.27,materials.hair);
    sphere(.31,3.05,.19,.4,.23,.3,materials.hair);
    sphere(.38,3.13,-.48,.28,.3,.25,materials.hair);
    const tail=sphere(.46,2.74,-.55,.27,.57,.26,materials.hair); tail.rotation.z=.3;
    sphere(-.57,2.64,.03,.12,.17,.1,materials.skin); sphere(.57,2.64,.03,.12,.17,.1,materials.skin);
    sphere(0,2.52,.55,.09,.12,.1,materials.skin);
    [-1,1].forEach(side=>{
      sphere(side*.22,2.68,.508,.035,.045,.026,materials.hair);
      const glasses = new THREE.Mesh(new THREE.TorusGeometry(.185,.018,8,32),materials.metal);
      glasses.position.set(side*.235,2.68,.55); model.add(glasses);
      limb(new THREE.Vector3(side*.42,2.7,.5),new THREE.Vector3(side*.57,2.73,0),.015,materials.metal);
      limb(new THREE.Vector3(side*.43,1.96,.02),new THREE.Vector3(side*.56,1.5,.33),.13,materials.pink);
      limb(new THREE.Vector3(side*.56,1.5,.33),new THREE.Vector3(side*.33,1.4,.85),.095,materials.skin);
      sphere(side*.3,1.4,.85,.13,.075,.15,materials.skin);
      limb(new THREE.Vector3(side*.24,1.2,0),new THREE.Vector3(side*.31,.92,.55),.19,materials.pants);
      limb(new THREE.Vector3(side*.31,.92,.55),new THREE.Vector3(side*.31,.34,.6),.14,materials.pants);
      sphere(side*.31,.21,.76,.19,.12,.3,materials.white);
    });
    box(0,2.68,.55,.11,.026,.026,materials.metal);
    const smile = new THREE.Mesh(new THREE.TorusGeometry(.12,.013,8,24,Math.PI*.65),materials.hair);
    smile.position.set(0,2.36,.51); smile.rotation.z=Math.PI*1.175; model.add(smile);
    box(0,1.12,-.12,1.05,.17,.8,materials.cream);
    box(0,1.66,-.39,.95,1.05,.16,materials.cream);
    limb(new THREE.Vector3(0,.25,-.1),new THREE.Vector3(0,1.05,-.1),.065,materials.metal);
    box(0,.18,-.1,.85,.06,.65,materials.metal);
    box(0,1.33,.85,1.4,.09,.85,materials.metal);
    const lid=box(0,1.69,1.22,1.4,.77,.075,materials.metal); lid.rotation.x=-.16;
    const panel=box(0,1.69,1.17,1.24,.61,.015,materials.screen); panel.rotation.x=-.16;
    for(let i=0;i<4;i++) box(-.23,1.84-i*.085,1.1,.5-i*.055,.022,.015,materials.cream);
    model.rotation.y=-.3;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible=true, frame=0, dragging=false, lastX=0, yaw=-.3, pitch=0;
    const render=()=>{ renderer.render(scene,camera); };
    const resize=()=>{ const {width,height}=element.getBoundingClientRect(); renderer.setSize(width,height); camera.aspect=width/height; camera.updateProjectionMatrix(); render(); };
    const pointerMove=(e:PointerEvent)=>{ if(reduced.matches)return; if(dragging){yaw+=(e.clientX-lastX)*.012; lastX=e.clientX;}else{const r=element.getBoundingClientRect();yaw=-.3+(e.clientX-r.left-r.width/2)/r.width*1.2;pitch=(e.clientY-r.top-r.height/2)/r.height*.15;} };
    const down=(e:PointerEvent)=>{dragging=true;lastX=e.clientX;element.setPointerCapture(e.pointerId);};
    const up=()=>{dragging=false;};
    const tick=()=>{ if(visible){const scroll=Math.min(1,window.scrollY/window.innerHeight);model.rotation.y+=(yaw+(!reduced.matches?scroll*.85:0)-model.rotation.y)*.08;model.rotation.x+=(pitch-model.rotation.x)*.08;render();}frame=requestAnimationFrame(tick); };
    const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(element);
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;});observer.observe(element);
    element.addEventListener("pointermove",pointerMove);element.addEventListener("pointerdown",down);element.addEventListener("pointerup",up);element.addEventListener("pointercancel",up);
    resize();setReady(true);tick();
    return()=>{cancelAnimationFrame(frame);resizeObserver.disconnect();observer.disconnect();element.removeEventListener("pointermove",pointerMove);element.removeEventListener("pointerdown",down);element.removeEventListener("pointerup",up);element.removeEventListener("pointercancel",up);scene.traverse(object=>{if(object instanceof THREE.Mesh)object.geometry.dispose();});Object.values(materials).forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();};
  },[]);
  return <div className="hero-character-model"><div ref={host} className="hero-character-canvas" />{!ready && <Image src="/character.webp" alt="" width={1200} height={1200} priority sizes="(max-width: 767px) 88vw, 480px" />}</div>;
}
