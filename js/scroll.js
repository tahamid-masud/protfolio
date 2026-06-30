// Navbar background

window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.background="rgba(8,10,20,.92)";

}

else{

nav.style.background="rgba(8,10,20,.45)";

}

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
// ===============================
// Skill Bar Animation
// ===============================

const skillBars=document.querySelectorAll(".skill-bar");

const observer2=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=entry.target.dataset.width+"%";

}

});

});

skillBars.forEach(bar=>{

observer2.observe(bar);

});