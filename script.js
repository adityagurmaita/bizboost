window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);

});

document.getElementById("darkModeBtn").onclick=()=>{

document.body.classList.toggle("dark");

};

document.getElementById("topBtn").onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)

? "block"

: "none";

});

});
// Sweet of the day

const sweets=[

"🍬 Rasgulla",

"🍩 Gulab Jamun",

"🥮 Kaju Katli",

"🥟 Samosa"

];

document.getElementById("specialSweet").innerText=

sweets[new Date().getDate()%sweets.length];



// AI Recommendation

document.getElementById("mood")

.addEventListener("change",function(){

let result="";

switch(this.value){

case "party":

result="🥳 Gulab Jamun";

break;

case "gift":

result="🎁 Kaju Katli";

break;

case "evening":

result="☕ Samosa";

break;

case "happy":

result="🍬 Rasgulla";

break;

}

document.getElementById("suggestion")

.innerText="Recommended: "+result;

});



// Spin & Win

const rewards=[

"🎉 5% OFF",

"🔥 10% OFF",

"🥟 Free Samosa",

"😄 Better Luck Next Time"

];

document.getElementById("spinBtn")

.onclick=()=>{

const reward=

rewards[Math.floor(Math.random()*rewards.length)];

document.getElementById("reward")

.innerText=reward;

};



// Digital Token

document.getElementById("tokenBtn")

.onclick=()=>{

const token=

"GS-"+Math.floor(100+Math.random()*900);

document.getElementById("tokenNumber")

.innerText=token;

};