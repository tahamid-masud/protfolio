const writeups = [

{
title:"BloodHound Enumeration",
category:"ad",
type:"PDF",
description:"Domain enumeration using BloodHound.",
file:"assets/uploads/ActiveDirectory/bloodhound.pdf"
},

{
title:"Kerberoasting",
category:"ad",
type:"PDF",
description:"Kerberoasting attack methodology.",
file:"assets/uploads/ActiveDirectory/kerberoasting.pdf"
},

{
title:"Network Enumeration",
category:"network",
type:"PDF",
description:"Host discovery and service enumeration.",
file:"assets/uploads/Network/network-enum.pdf"
},

{
title:"SQL Injection",
category:"web",
type:"PDF",
description:"SQL Injection assessment.",
file:"assets/uploads/Web/sqli.pdf"
}

];

const container=document.getElementById("writeupContainer");

function displayWriteups(data){

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="col-lg-4 writeup-card"

data-category="${item.category}">

<div class="glass h-100">

<div class="pdf-icon">

<i class="fas fa-file-pdf"></i>

</div>

<h4>${item.title}</h4>

<p>${item.description}</p>

<span class="badge bg-info">

${item.type}

</span>

<div class="mt-4">

<a href="${item.file}"

target="_blank"

class="btn btn-cyan btn-sm">

Preview

</a>

<a href="${item.file}"

download

class="btn btn-outline-light btn-sm">

Download

</a>

</div>

</div>

</div>

`;

});

}

displayWriteups(writeups);