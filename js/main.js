// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.8s";

    },1500);

});

// ===============================
// AOS Animation
// ===============================

AOS.init({

    duration:1000,

    once:true

});
// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

const runCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

});

};

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

observer.disconnect();

}

});

});

observer.observe(document.querySelector("#about"));