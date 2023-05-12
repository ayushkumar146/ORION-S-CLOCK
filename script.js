let date = new Date(); 
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();
let a=document.querySelector(".clo");
console.log(a);
a.outerHTML=`<div class="bg"><h1 class="h2">${hh} : ${mm} : ${ss} </h1></div>`;
