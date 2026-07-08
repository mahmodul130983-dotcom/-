console.log("Garden Loaded ❤️");

// ==========================================
// FLOWER GARDEN FOR SUMU
// garden.js
// ==========================================

// ---------- Background Music ----------

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic) {
    bgMusic.volume = 0.45;

    document.addEventListener(
        "click",
        () => {
            bgMusic.play().catch(() => {});
        },
        { once: true }
    );
}

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();

            musicBtn.innerHTML = "🔊";

        } else {

            bgMusic.pause();

            musicBtn.innerHTML = "🎵";

        }

    });

}

// ==========================================
// Dynamic Lily Garden
// ==========================================

const garden = document.querySelector(".garden");

const lilyTypes = [
    "lily-small",
    "lily-medium",
    "lily-large"
];

function createLily() {

    if (!garden) return;

    const flower = document.createElement("img");

    flower.src = "assets/img/lily.svg";

    flower.className =
        "lily-svg " +
        lilyTypes[Math.floor(Math.random() * lilyTypes.length)];

    flower.style.left = Math.random() * 100 + "%";

    flower.style.bottom =
        70 + Math.random() * 150 + "px";

    flower.style.opacity =
        0.7 + Math.random() * 0.3;

    flower.style.animationDelay =
        Math.random() * 5 + "s";

    garden.appendChild(flower);

}

for (let i = 0; i < 20; i++) {

    createLily();

}

setInterval(() => {

    createLily();

    const flowers =
        document.querySelectorAll(".lily-svg");

    if (flowers.length > 45) {

        flowers[0].remove();

    }

}, 2500);

// ==========================================
// Rajanigandha
// ==========================================

const rajanTypes = [
    "rajan-small",
    "rajan-medium",
    "rajan-large"
];

function createRajanigandha() {

    if (!garden) return;

    const flower = document.createElement("img");

    flower.src = "assets/img/rajanigandha.svg";

    flower.className =
        "rajanigandha-svg " +
        rajanTypes[Math.floor(Math.random() * rajanTypes.length)];

    flower.style.left =
        Math.random() * 100 + "%";

    flower.style.bottom =
        80 + Math.random() * 150 + "px";

    garden.appendChild(flower);

}

for (let i = 0; i < 15; i++) {

    createRajanigandha();

}

setInterval(() => {

    createRajanigandha();

    const flowers =
        document.querySelectorAll(".rajanigandha-svg");

    if (flowers.length > 35) {

        flowers[0].remove();

    }

}, 3500);

// ==========================================
// Fireflies
// ==========================================

function firefly() {

    const light =
        document.createElement("div");

    light.className = "firefly";

    light.style.left =
        Math.random() * 100 + "vw";

    light.style.top =
        Math.random() * 100 + "vh";

    document.body.appendChild(light);

    setTimeout(() => {

        light.remove();

    }, 7000);

}

setInterval(firefly, 500);

// ==========================================
// Falling Petals
// ==========================================

function petal() {

    const p =
        document.createElement("div");

    p.className = "petal";

    p.innerHTML = "🌸";

    p.style.left =
        Math.random() * 100 + "vw";

    p.style.animationDuration =
        6 + Math.random() * 6 + "s";

    document.body.appendChild(p);

    setTimeout(() => {

        p.remove();

    }, 12000);

}

setInterval(petal, 700);

// ==========================================
// Floating Hearts
// ==========================================

function floatingHeart() {

    const heart =
        document.createElement("div");

    heart.className = "big-heart";

    heart.innerHTML = "💖";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-40px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(floatingHeart, 2000);

// ==========================================
// Romantic Quotes
// ==========================================

const quotes = [

    "Every Lily reminds me of you.",

    "You are more beautiful than every flower.",

    "This garden blooms because of your smile.",

    "Forever with you, Sumu ❤️"

];

const quoteBox =
    document.querySelector(".quote");

if (quoteBox) {

    let index = 0;

    setInterval(() => {

        quoteBox.innerHTML =
            quotes[index];

        index++;

        if (index >= quotes.length)
            index = 0;

    }, 5000);

}

// ==========================================
// Cinematic Ending
// ==========================================

window.addEventListener("scroll", () => {

    const end =
        document.getElementById("cinematicEnding");

    if (!end) return;

    if (

        window.innerHeight +
            window.scrollY >=
        document.body.offsetHeight - 80

    ) {

        end.classList.add("show");

    }

});
// ==========================================
// PART 2
// Shanto + Sumu Animation
// ==========================================

const shanto =
document.querySelector(".shanto-character");

const sumu =
document.querySelector(".sumu-character");

const proposalText =
document.querySelector(".proposal-text");

window.addEventListener("load",()=>{

    if(shanto){

        shanto.style.opacity="0";

        shanto.style.transform=
        "translateX(-200px)";

        setTimeout(()=>{

            shanto.style.transition=
            "2s ease";

            shanto.style.opacity="1";

            shanto.style.transform=
            "translateX(0)";

        },500);

    }

    if(sumu){

        sumu.style.opacity="0";

        sumu.style.transform=
        "translateX(200px)";

        setTimeout(()=>{

            sumu.style.transition=
            "2s ease";

            sumu.style.opacity="1";

            sumu.style.transform=
            "translateX(0)";

        },1200);

    }

    if(proposalText){

        proposalText.style.opacity="0";

        proposalText.style.transform=
        "translateY(40px)";

        setTimeout(()=>{

            proposalText.style.transition=
            "2s ease";

            proposalText.style.opacity="1";

            proposalText.style.transform=
            "translateY(0)";

        },2200);

    }

});

// ==========================================
// Floating Hearts Between Them
// ==========================================

function createLoveHeart(){

    const heart=
    document.createElement("div");

    heart.innerHTML="💖";

    heart.className="love-heart";

    heart.style.position="fixed";

    heart.style.left=
    (45+Math.random()*10)+"vw";

    heart.style.bottom="25vh";

    heart.style.fontSize=
    (18+Math.random()*20)+"px";

    heart.style.pointerEvents="none";

    heart.style.transition="5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        "translateY(-250px) scale(1.5)";

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

setInterval(createLoveHeart,1200);

// ==========================================
// Love Glow Animation
// ==========================================

const glow=
document.querySelector(".love-glow");

if(glow){

setInterval(()=>{

glow.animate([

{
opacity:.25,
transform:"scale(1)"
},

{
opacity:.6,
transform:"scale(1.15)"
},

{
opacity:.25,
transform:"scale(1)"
}

],{

duration:2500

});

},2600);

}

// ==========================================
// Flower Ring Rotation
// ==========================================

const flowerRing=
document.querySelector(".flower-ring");

if(flowerRing){

let deg=0;

setInterval(()=>{

deg+=0.25;

flowerRing.style.transform=

`rotate(${deg}deg)`;

},20);

}
// ==========================================
// PART 3
// Premium Cinematic Effects
// ==========================================

// ---------- Moon Glow ----------

const moon =
document.querySelector(".moon");

if(moon){

setInterval(()=>{

moon.animate([

{
transform:"scale(1)",
filter:"drop-shadow(0 0 30px white)"
},

{
transform:"scale(1.08)",
filter:"drop-shadow(0 0 80px #fff)"
},

{
transform:"scale(1)",
filter:"drop-shadow(0 0 30px white)"
}

],{

duration:4000

});

},4000);

}

// ==========================================
// Golden Sparkles
// ==========================================

function createGoldenSparkle(){

const s =
document.createElement("div");

s.innerHTML="✨";

s.className="goldSparkle";

s.style.left=
Math.random()*100+"vw";

s.style.top=
Math.random()*100+"vh";

s.style.fontSize=
(10+Math.random()*18)+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.animate([

{
opacity:0,
transform:"translateY(0) scale(.3)"
},

{
opacity:1,
transform:"translateY(-25px) scale(1)"
},

{
opacity:0,
transform:"translateY(-60px) scale(1.5)"
}

],{

duration:2200

});

},20);

setTimeout(()=>{

s.remove();

},2300);

}

setInterval(createGoldenSparkle,350);

// ==========================================
// Dream Particles
// ==========================================

function dreamParticle(){

const p=
document.createElement("div");

p.className="dream-particle";

p.innerHTML="🤍";

p.style.left=
Math.random()*100+"vw";

p.style.top="-20px";

p.style.fontSize=
(12+Math.random()*20)+"px";

document.body.appendChild(p);

p.animate([

{
transform:"translateY(0)",
opacity:0
},

{
opacity:1
},

{
transform:"translateY(110vh)",
opacity:0
}

],{

duration:9000+Math.random()*5000

});

setTimeout(()=>{

p.remove();

},14000);

}

setInterval(dreamParticle,700);

// ==========================================
// Magic Wind
// ==========================================

const flowers=document.querySelectorAll(
".lily-svg,.rajanigandha-svg"
);

flowers.forEach((flower,index)=>{

setInterval(()=>{

flower.animate([

{
transform:"rotate(-2deg)"
},

{
transform:"rotate(3deg)"
},

{
transform:"rotate(-2deg)"
}

],{

duration:3500+(index*80)

});

},3500);

});

// ==========================================
// Proposal Text Glow
// ==========================================

const title=
document.querySelector(".proposal-text h2");

if(title){

setInterval(()=>{

title.animate([

{
textShadow:"0 0 10px white"
},

{
textShadow:"0 0 35px hotpink"
},

{
textShadow:"0 0 10px white"
}

],{

duration:2500

});

},2600);

}

// ==========================================
// Floating Love Symbols
// ==========================================

const icons=["❤","💖","💕","✨","🌸"];

setInterval(()=>{

const icon=
document.createElement("div");

icon.innerHTML=
icons[Math.floor(Math.random()*icons.length)];

icon.style.position="fixed";

icon.style.left=
Math.random()*100+"vw";

icon.style.bottom="-30px";

icon.style.fontSize=
(18+Math.random()*20)+"px";

icon.style.pointerEvents="none";

icon.style.zIndex="999";

document.body.appendChild(icon);

icon.animate([

{
transform:"translateY(0)",
opacity:0
},

{
opacity:1
},

{
transform:"translateY(-120vh)",
opacity:0
}

],{

duration:7000

});

setTimeout(()=>{

icon.remove();

},7000);

},900);
// ==========================================
// PART 4
// Final Cinematic Ending
// ==========================================

// ---------- Cinematic Ending ----------

const ending =
document.getElementById("cinematicEnding");

let endingPlayed = false;

window.addEventListener("scroll", () => {

    if (endingPlayed) return;

    if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 120
    ) {

        endingPlayed = true;

        if (ending) {

            ending.style.display = "flex";

            setTimeout(() => {

                ending.classList.add("show");

            }, 100);

        }

        launchEndingEffects();

    }

});

// ==========================================
// Forever Hearts
// ==========================================

function foreverHeart() {

    const heart = document.createElement("div");

    heart.className = "foreverHeart";

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    heart.animate([

        {
            transform:"translateY(0)",
            opacity:0
        },

        {
            opacity:1
        },

        {
            transform:"translateY(-120vh)",
            opacity:0
        }

    ],{

        duration:9000

    });

    setTimeout(()=>{

        heart.remove();

    },9000);

}

// ==========================================
// Ending Sparkles
// ==========================================

function endingSparkle(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.className="goldSparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2500);

}

// ==========================================
// Ending Flowers
// ==========================================

function endingFlower(){

    const flower=document.createElement("div");

    const flowers=[

        "🌸",
        "🌺",
        "🌷",
        "💮",
        "🌼"

    ];

    flower.innerHTML=

    flowers[
    Math.floor(
    Math.random()*flowers.length
    )
    ];

    flower.style.position="fixed";

    flower.style.left=
    Math.random()*100+"vw";

    flower.style.top="-50px";

    flower.style.fontSize=
    (20+Math.random()*30)+"px";

    flower.style.pointerEvents="none";

    flower.style.zIndex="999999";

    document.body.appendChild(flower);

    flower.animate([

        {

            transform:"translateY(0) rotate(0deg)",

            opacity:0

        },

        {

            opacity:1

        },

        {

            transform:"translateY(120vh) rotate(720deg)",

            opacity:0

        }

    ],{

        duration:8000

    });

    setTimeout(()=>{

        flower.remove();

    },8000);

}

// ==========================================
// Launch Ending Effects
// ==========================================

function launchEndingEffects(){

    setInterval(foreverHeart,400);

    setInterval(endingSparkle,180);

    setInterval(endingFlower,700);

}

// ==========================================
// Auto Music
// ==========================================

window.addEventListener("load",()=>{

    const music=document.getElementById("bgMusic");

    if(!music) return;

    music.volume=0.45;

    music.play().catch(()=>{

        document.body.addEventListener("click",()=>{

            music.play();

        },{once:true});

    });

});

// ==========================================
// Final Message
// ==========================================

console.log("❤️ Forever Together ❤️");
console.log("Made with Love for Sumu");
