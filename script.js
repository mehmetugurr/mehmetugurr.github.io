/*==================================
  PUBG ID KOPYALAMA
==================================*/

const copyBtn = document.getElementById("copyBtn");
const pubgId = document.getElementById("pubg-id");

if (copyBtn && pubgId) {

    copyBtn.addEventListener("click", async () => {

        try{

            await navigator.clipboard.writeText(pubgId.innerText);

            copyBtn.innerHTML="✅ Kopyalandı!";

            copyBtn.style.background="#00E676";

            setTimeout(()=>{

                copyBtn.innerHTML='<i class="fa-regular fa-copy"></i> Kopyala';

                copyBtn.style.background="#61DAFB";

            },1800);

        }catch{

            alert("Kopyalama başarısız.");

        }

    });

}


/*==================================
  KART ANİMASYONU
==================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


/*==================================
  PROFİL PARLAMA
==================================*/

const profile = document.querySelector(".profile");

if(profile){

let glow = 0;

setInterval(() => {

glow++;

profile.style.boxShadow =
`0 0 ${30 + Math.sin(glow/10)*20}px #61DAFB`;

},40);

}
/*==============================
 RANDOM STARS
==============================*/

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

star.style.animationDuration=(3+Math.random()*4)+"s";

document.body.appendChild(star);

}


/*==================================
  SCROLL ANİMASYONU
==================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="1s";

observer.observe(section);

});
/*==============================
CURSOR GLOW
==============================*/

const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
/*==============================
LOADER
==============================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},900);

});


/*==============================
RIPPLE
==============================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";

circle.style.height=d+"px";

circle.style.left=e.offsetX-d/2+"px";

circle.style.top=e.offsetY-d/2+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});


/*==============================
BUZ PARÇACIKLARI
==============================*/

setInterval(()=>{

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*window.innerWidth+"px";

p.style.bottom="-20px";

p.style.animationDuration=(5+Math.random()*6)+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},11000);

},250);
/*==============================
 HERO COUNTER
==============================*/

const counters=document.querySelectorAll(".number");

counters.forEach(counter=>{

if(counter.innerText==="870K+") return;

});
/*==================================
CARD FOLLOW LIGHT
==================================*/

document.querySelectorAll(".card, .pubg-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--mouse-x",x+"px");
card.style.setProperty("--mouse-y",y+"px");

});

});