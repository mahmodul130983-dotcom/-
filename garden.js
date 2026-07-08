/* ==========================================
   PART 7.1
   MEMORY GALLERY
========================================== */

const galleryCards =
document.querySelectorAll(".memory-card");

galleryCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=

`perspective(1200px)
rotateY(${rotateY}deg)
rotateX(${rotateX}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* Floating Hearts */

function memoryHeart(){

const heart=document.createElement("div");

heart.className="memory-heart";

heart.innerHTML=

Math.random()>.5?"❤":"💖";

heart.style.left=

Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.animationDuration=

6+Math.random()*4+"s";

heart.style.fontSize=

18+Math.random()*18+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(memoryHeart,900);

/* Twinkle Stars */

function memoryStar(){

const star=document.createElement("div");

star.className="memory-star";

star.style.left=

Math.random()*100+"vw";

star.style.top=

Math.random()*100+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(memoryStar,250);

/* Fade In */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}

});

});

galleryCards.forEach(card=>{

observer.observe(card);

});
/* ==========================================
   PART 7.2
   LIVE ROMANTIC COUNTDOWN
========================================== */

/* ---------- Next Birthday ---------- */

function getNextBirthday(){

const now = new Date();

let year = now.getFullYear();

/* August = 7 (0 = January) */

let birthday = new Date(year,7,16,0,0,0);

if(now > birthday){

birthday = new Date(year+1,7,16,0,0,0);

}

return birthday.getTime();

}

const targetDate = getNextBirthday();

/* ---------- Elements ---------- */

const dayBox=document.getElementById("days");
const hourBox=document.getElementById("hours");
const minuteBox=document.getElementById("minutes");
const secondBox=document.getElementById("seconds");

/* ---------- Update Timer ---------- */

function updateCountdown(){

const now=new Date().getTime();

const distance=targetDate-now;

if(distance<=0){

if(dayBox) dayBox.innerHTML="00";
if(hourBox) hourBox.innerHTML="00";
if(minuteBox) minuteBox.innerHTML="00";
if(secondBox) secondBox.innerHTML="00";

const title=document.querySelector(".countdown-title");

if(title){

title.innerHTML="🎉 Happy Birthday Sumu ❤️";

}

clearInterval(countdownInterval);

return;

}

const days=Math.floor(
distance/(1000*60*60*24)
);

const hours=Math.floor(
(distance%(1000*60*60*24))/
(1000*60*60)
);

const minutes=Math.floor(
(distance%(1000*60*60))/
(1000*60)
);

const seconds=Math.floor(
(distance%(1000*60))/1000
);

if(dayBox)
dayBox.innerHTML=String(days).padStart(2,"0");

if(hourBox)
hourBox.innerHTML=String(hours).padStart(2,"0");

if(minuteBox)
minuteBox.innerHTML=String(minutes).padStart(2,"0");

if(secondBox)
secondBox.innerHTML=String(seconds).padStart(2,"0");

}

/* ---------- Start ---------- */

const countdownInterval=
setInterval(updateCountdown,1000);

updateCountdown();

/* ==========================================
   Floating Hearts
========================================== */

function countdownHeart(){

const heart=document.createElement("div");

heart.className="count-heart";

heart.innerHTML=
Math.random()>0.5?"💖":"❤️";

heart.style.left=
Math.random()*100+"vw";

heart.style.animationDuration=
(6+Math.random()*5)+"s";

heart.style.fontSize=
(18+Math.random()*18)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(countdownHeart,700);

/* ==========================================
   Twinkle Stars
========================================== */

function countdownStar(){

const star=document.createElement("div");

star.className="count-star";

star.style.left=
Math.random()*100+"vw";

star.style.top=
Math.random()*100+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2200);

}

setInterval(countdownStar,250);

/* ==========================================
   Floating Sparkles
========================================== */

function countdownSparkle(){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=
Math.random()*100+"vw";

sparkle.style.top=
Math.random()*100+"vh";

sparkle.style.fontSize=
(12+Math.random()*10)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.opacity="0";

sparkle.style.transition="2s";

sparkle.style.zIndex="999";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.opacity="1";

sparkle.style.transform="translateY(-40px)";

},50);

setTimeout(()=>{

sparkle.remove();

},2000);

}

setInterval(countdownSparkle,500);

/* ==========================================
   Countdown Card Animation
========================================== */
/* ==========================================
   PART 7.3
   CINEMATIC PROPOSAL
========================================== */

const proposalSection =
document.querySelector(".proposal-page");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

/* ==========================================
   Fade In Proposal
========================================== */

if(proposalSection){

const proposalObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(100px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1800,
fill:"forwards",
easing:"ease-out"

});

}

});

},{threshold:.35});

proposalObserver.observe(proposalSection);

}

/* ==========================================
   Floating Hearts
========================================== */

function proposalHeart(){

const heart=document.createElement("div");

heart.className="proposal-heart";

heart.innerHTML=
Math.random()>.5?"❤️":"💖";

heart.style.left=
Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.animationDuration=
(6+Math.random()*4)+"s";

heart.style.fontSize=
(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(proposalHeart,700);

/* ==========================================
   Sparkles
========================================== */

function proposalSpark(){

const spark=document.createElement("div");

spark.className="proposal-spark";

spark.style.left=
Math.random()*100+"vw";

spark.style.top=
Math.random()*100+"vh";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},2500);

}

setInterval(proposalSpark,250);

/* ==========================================
   Love Beam Pulse
========================================== */

const beam=
document.querySelector(".love-beam");

if(beam){

setInterval(()=>{

beam.animate([

{

opacity:.3,

transform:"translateX(-50%) scaleX(.9)"

},

{

opacity:1,

transform:"translateX(-50%) scaleX(1.1)"

},

{

opacity:.3,

transform:"translateX(-50%) scaleX(.9)"

}

],{

duration:2000

});

},2000);

}

/* ==========================================
   YES BUTTON
========================================== */

if(yesBtn){

yesBtn.addEventListener("click",()=>{

const music=
document.getElementById("bgMusic");

if(music){

music.play().catch(()=>{});

}

const celebration=
document.getElementById("yesCelebration");

if(celebration){

celebration.style.display="flex";

}

});

}

/* ==========================================
   NO BUTTON
========================================== */

if(noBtn){

const messages=[

"No button doesn't work 😄",

"Please press YES ❤️",

"I'll wait forever 🌸",

"My answer is already YES 💖",

"You can't escape my love ❤️"

];

let index=0;

noBtn.addEventListener("mouseover",()=>{

noBtn.style.position="absolute";

noBtn.style.left=
Math.random()*75+"%";

noBtn.style.top=
Math.random()*70+"%";

noBtn.innerHTML=
messages[index];

index++;

if(index>=messages.length){

index=0;

}

});

}

/* ==========================================
   Auto Scroll Effect
========================================== */

window.addEventListener("load",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/* ==========================================
   PART 7.4
   YES CELEBRATION
========================================== */

const yesCelebration =
document.getElementById("yesCelebration");

/* ==========================
   YES Button
========================== */

if(yesBtn){

yesBtn.addEventListener("click",()=>{

if(yesCelebration){

yesCelebration.style.display="flex";

}

startCelebration();

});

}

/* ==========================
   Celebration
========================== */

function startCelebration(){

createFireworks();

setInterval(createFireworks,1800);

setInterval(createConfetti,180);

setInterval(createRosePetal,250);

setInterval(createHeartBlast,450);

setInterval(createGoldenSparkle,120);

}

/* ==========================
   Fireworks
========================== */

function createFireworks(){

for(let i=0;i<30;i++){

const fire=document.createElement("div");

fire.className="firework";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*70+"vh";

fire.style.setProperty(

"--x",

(-180+Math.random()*360)+"px"

);

fire.style.setProperty(

"--y",

(-180+Math.random()*360)+"px"

);

fire.style.background=

`hsl(${Math.random()*360},100%,70%)`;

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1800);

}

}

/* ==========================
   Confetti
========================== */

function createConfetti(){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.animationDuration=

(4+Math.random()*4)+"s";

c.style.background=

`hsl(${Math.random()*360},90%,65%)`;

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},9000);

}

/* ==========================
   Rose Petals
========================== */

function createRosePetal(){

const petal=document.createElement("div");

petal.className="rose-petal";

petal.innerHTML=

Math.random()>.5?"🌹":"🌸";

petal.style.left=

Math.random()*100+"vw";

petal.style.animationDuration=

(5+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

/* ==========================
   Hearts
========================== */

function createHeartBlast(){

const heart=document.createElement("div");

heart.className="big-love-heart";

heart.innerHTML=

Math.random()>.5?"❤️":"💖";

heart.style.left=

50+"vw";

heart.style.top=

55+"vh";

heart.style.setProperty(

"--moveX",

(-450+Math.random()*900)+"px"

);

heart.style.setProperty(

"--moveY",

(-450+Math.random()*900)+"px"

);

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

}

/* ==========================
   Sparkles
========================== */

function createGoldenSparkle(){

const star=document.createElement("div");

star.className="goldSparkle";

star.innerHTML="✨";

star.style.left=

Math.random()*100+"vw";

star.style.top=

Math.random()*100+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

/* ==========================
   Music
========================== */

const bgMusic=

document.getElementById("bgMusic");

if(bgMusic){

bgMusic.volume=.45;

}

/* ==========================
   Fade In Music
========================== */

function playRomanticMusic(){

if(!bgMusic) return;

bgMusic.play().catch(()=>{});

let volume=0;

bgMusic.volume=0;

const fade=setInterval(()=>{

volume+=0.03;

bgMusic.volume=Math.min(volume,.45);

if(volume>=.45){

clearInterval(fade);

}

},250);

}

if(yesBtn){

yesBtn.addEventListener("click",playRomanticMusic);

}
/* ==========================================
   PART 7.5
   FOREVER ENDING
========================================== */

const foreverEnding =
document.getElementById("foreverEnding");

/* ==========================
   Show Ending
========================== */

function showForeverEnding(){

if(!foreverEnding) return;

foreverEnding.style.display="flex";

createEndingEffects();

}

/* ==========================
   Auto Show After YES
========================== */

if(yesBtn){

yesBtn.addEventListener("click",()=>{

setTimeout(()=>{

showForeverEnding();

},12000);

});

}

/* ==========================
   Forever Flowers
========================== */

function foreverFlower(){

const flower=document.createElement("div");

flower.className="forever-flower";

const flowers=[

"🌸",
"🌹",
"🌺",
"🌼",
"💐",
"🤍"

];

flower.innerHTML=

flowers[
Math.floor(Math.random()*flowers.length)
];

flower.style.left=

Math.random()*100+"vw";

flower.style.bottom="-50px";

flower.style.animationDuration=

(8+Math.random()*6)+"s";

foreverEnding.appendChild(flower);

setTimeout(()=>{

flower.remove();

},15000);

}

/* ==========================
   Forever Hearts
========================== */

function foreverHeart(){

const heart=document.createElement("div");

heart.className="forever-heart";

heart.innerHTML=

Math.random()>.5?"❤️":"💖";

heart.style.left=

Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.animationDuration=

(7+Math.random()*5)+"s";

foreverEnding.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

/* ==========================
   Stars
========================== */

function foreverStar(){

const star=document.createElement("div");

star.className="forever-star";

star.style.left=

Math.random()*100+"vw";

star.style.top=

Math.random()*100+"vh";

foreverEnding.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

/* ==========================
   Quote Rotation
========================== */

const foreverQuotes=[

"Forever With Sumu ❤️",

"You Are My Favorite Place.",

"Our Story Never Ends.",

"I Will Choose You Every Time.",

"Love Beyond Infinity ♾️"

];

function rotateQuote(){

const quote=

document.querySelector(".forever-quote");

if(!quote) return;

let index=0;

quote.innerHTML=

foreverQuotes[index];

setInterval(()=>{

index++;

if(index>=foreverQuotes.length){

index=0;

}

quote.innerHTML=

foreverQuotes[index];

},4500);

}

/* ==========================
   Effects
========================== */

function createEndingEffects(){

rotateQuote();

setInterval(foreverFlower,250);

setInterval(foreverHeart,400);

setInterval(foreverStar,180);

}

/* ==========================
   Infinity Glow
========================== */

const
    /* ==========================================
   PART 7.5
   FOREVER ENDING
========================================== */

const foreverEnding =
document.getElementById("foreverEnding");

/* ==========================
   Show Ending
========================== */

function showForeverEnding(){

if(!foreverEnding) return;

foreverEnding.style.display="flex";

createEndingEffects();

}

/* ==========================
   Auto Show After YES
========================== */

if(yesBtn){

yesBtn.addEventListener("click",()=>{

setTimeout(()=>{

showForeverEnding();

},12000);

});

}

/* ==========================
   Forever Flowers
========================== */

function foreverFlower(){

const flower=document.createElement("div");

flower.className="forever-flower";

const flowers=[

"🌸",
"🌹",
"🌺",
"🌼",
"💐",
"🤍"

];

flower.innerHTML=

flowers[
Math.floor(Math.random()*flowers.length)
];

flower.style.left=

Math.random()*100+"vw";

flower.style.bottom="-50px";

flower.style.animationDuration=

(8+Math.random()*6)+"s";

foreverEnding.appendChild(flower);

setTimeout(()=>{

flower.remove();

},15000);

}

/* ==========================
   Forever Hearts
========================== */

function foreverHeart(){

const heart=document.createElement("div");

heart.className="forever-heart";

heart.innerHTML=

Math.random()>.5?"❤️":"💖";

heart.style.left=

Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.animationDuration=

(7+Math.random()*5)+"s";

foreverEnding.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

/* ==========================
   Stars
========================== */

function foreverStar(){

const star=document.createElement("div");

star.className="forever-star";

star.style.left=

Math.random()*100+"vw";

star.style.top=

Math.random()*100+"vh";

foreverEnding.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

/* ==========================
   Quote Rotation
========================== */

const foreverQuotes=[

"Forever With Sumu ❤️",

"You Are My Favorite Place.",

"Our Story Never Ends.",

"I Will Choose You Every Time.",

"Love Beyond Infinity ♾️"

];

function rotateQuote(){

const quote=

document.querySelector(".forever-quote");

if(!quote) return;

let index=0;

quote.innerHTML=

foreverQuotes[index];

setInterval(()=>{

index++;

if(index>=foreverQuotes.length){

index=0;

}

quote.innerHTML=

foreverQuotes[index];

},4500);

}

/* ==========================
   Effects
========================== */

function createEndingEffects(){

rotateQuote();

setInterval(foreverFlower,250);

setInterval(foreverHeart,400);

setInterval(foreverStar,180);

}

/* ==========================
   Infinity Glow
========================== */

const infinity=

document.querySelector(".infinity-symbol");

if(infinity){

setInterval(()=>{

infinity.animate([

{

transform:"rotate(0deg) scale(1)"

},

{

transform:"rotate(180deg) scale(1.15)"

},

{

transform:"rotate(360deg) scale(1)"

}

],{

duration:6000,

iterations:1,

easing:"ease-in-out"

});

},6000);

}

/* ==========================
   Music Fade
========================== */

if(bgMusic){

window.addEventListener("beforeunload",()=>{

let fade=

setInterval(()=>{

if(bgMusic.volume>0.02){

bgMusic.volume-=0.02;

}else{

clearInterval(fade);

}

},150);

});

}
/* ==========================================
   PART 7.6
   FINAL MASTER SCRIPT
========================================== */

console.log("Infinity Love Loaded ❤️");

/* ==========================
   Smooth Scroll
========================== */

document.documentElement.style.scrollBehavior="smooth";

/* ==========================
   Reveal Animation
========================== */

const revealItems=document.querySelectorAll(

".love-section,.proposal-scene,.memory-card,.countdown-section,.hero,.message"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/* ==========================
   Auto Background Music
========================== */

const music=document.getElementById("bgMusic");

function startMusic(){

if(!music) return;

music.volume=.4;

music.play().catch(()=>{});

document.removeEventListener("click",startMusic);

document.removeEventListener("touchstart",startMusic);

}

document.addEventListener("click",startMusic);

document.addEventListener("touchstart",startMusic);

/* ==========================
   Floating Dreams
========================== */

function dreamParticle(){

const p=document.createElement("div");

p.className="dream-particle";

const items=[

"✨",
"🤍",
"🌸",
"💖",
"🌺"

];

p.innerHTML=

items[Math.floor(Math.random()*items.length)];

p.style.left=

Math.random()*100+"vw";

p.style.top=

Math.random()*100+"vh";

p.style.fontSize=

(14+Math.random()*18)+"px";

document.body.appendChild(p);

setTimeout(()=>{

p.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:"translateY(-120px)",

opacity:0

}

],{

duration:4000,

fill:"forwards"

});

},50);

setTimeout(()=>{

p.remove();

},4200);

}

setInterval(dreamParticle,600);

/* ==========================
   Cursor Glow
========================== */

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="20px";

glow.style.height="20px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="rgba(255,192,203,.5)";

glow.style.filter="blur(8px)";

glow.style.zIndex="999999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";

glow.style.top=e.clientY-10+"px";

});

/* ==========================
   Random Romantic Messages
========================== */

const romanticTexts=[

"I Love You Sumu ❤️",

"You Are My Forever 🌸",

"My Heart Belongs To You 🤍",

"Every Flower Reminds Me Of You 🌺",

"Forever Together ♾️"

];

setInterval(()=>{

const text=document.createElement("div");

text.innerHTML=

romanticTexts[
Math.floor(Math.random()*romanticTexts.length)
];

text.style.position="fixed";

text.style.left=

20+Math.random()*60+"vw";

text.style.top=

20+Math.random()*60+"vh";

text.style.color="white";

text.style.fontSize="18px";

text.style.opacity=".85";

text.style.pointerEvents="none";

text.style.zIndex="99999";

document.body.appendChild(text);

text.animate([

{

opacity:0,

transform:"translateY(20px)"

},

{

opacity:1,

transform:"translateY(0)"

},
