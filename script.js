const startScreen=document.getElementById("startScreen");
const speechScreen=document.getElementById("speechScreen");
const speechText=document.getElementById("speechText");
const inviteScreen=document.getElementById("inviteScreen");
const photoScreen=document.getElementById("photoScreen");
const photoText=document.getElementById("photoText");

const canvas=document.getElementById("effects");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// ==================== Shkrim i fjalimit ====================
const speech=`E dashur Nuçi,

Çdo ditë me ty më bën të kuptoj se çfarë do të thotë dashuria e vërtetë. Çdo buzëqeshje e jotja ndez diellin në ditët e mia. Çdo moment me ty është një poezi që nuk do të harrohet kurrë.

Sot dua të të them se çdo kujtim me ty është thesar, çdo ditë pranë teje është një mrekulli, dhe çdo fjalë që të them vjen nga zemra ime më e thellë.

Ti je shpirti im, gëzimi im dhe arsyeja pse çdo ditë dua të jem më mirë.

Të dua pafund ❤️
`;

// ==================== Animacione zemrash dhe lulesh ====================
let items=[];
class Effect{
 constructor(type){
  this.x=Math.random()*canvas.width;
  this.y=-10;
  this.size=Math.random()*10+5;
  this.speed=Math.random()*1.5+1;
  this.type=type;
 }
 draw(){
  if(this.type==='heart') ctx.fillStyle="#ff3366";
  else if(this.type==='flower') ctx.fillStyle="#ff99cc";
  else ctx.fillStyle="#ffd700";
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
  ctx.fill();
  this.y+=this.speed;
  if(this.y>canvas.height) this.y=-10;
 }
}
function startEffects(){
 setInterval(()=>{
   const types=['heart','flower'];
   items.push(new Effect(types[Math.floor(Math.random()*types.length)]));
 },150);
 animate();
}
function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 items.forEach(item=>item.draw());
 requestAnimationFrame(animate);
}

// ==================== Shkrim gradual ====================
function typeWriter(text, element, speed, callback){
 let i=0;
 function type(){
   if(i<text.length){
     element.innerHTML+=text.charAt(i);
     i++;
     setTimeout(type, speed);
   }else if(callback) callback();
 }
 type();
}

// ==================== Start Screen ====================
startScreen.onclick=()=>{
 startScreen.classList.add("hidden");
 speechScreen.classList.remove("hidden");
 startEffects();
 typeWriter(speech, speechText, 40, ()=>{
   setTimeout(()=>{speechScreen.classList.add("hidden"); inviteScreen.classList.remove("hidden");},1000);
 });
};

// ==================== Butonat e ftesës ====================
document.getElementById("yesBtn").onclick=()=>{
 inviteScreen.classList.add("hidden");
 photoScreen.classList.remove("hidden");
 document.querySelector(".photo-big").style.opacity=1;
 document.querySelector(".photo-big").style.transform="scale(1)";
 photoText.innerText="Më fal për çdo ditë që të kam merzit dhe jam sjellë keq me ty, por ty të kam dhe të të dua. Do vij.\nGëzuar ditëlindjen Nuçi jem. Të dua e vogla ime ❤️";
};
document.getElementById("noBtn").onclick=()=>{
 inviteScreen.classList.add("hidden");
 photoScreen.classList.remove("hidden");
 document.querySelector(".photo-big").style.opacity=1;
 document.querySelector(".photo-big").style.transform="scale(1)";
 photoText.innerText="Më fal për çdo ditë që të kam merzit dhe jam sjellë keq me ty, por ty të kam dhe të të dua. Do vij.\nGëzuar ditëlindjen Nuçi jem. Të dua e vogla ime ❤️";
};

// Nis efektet që nga fillimi
startEffects();
