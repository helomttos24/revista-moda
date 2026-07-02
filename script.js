document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
};
});

const topo=document.querySelector(".topo");

window.onscroll=()=>{
topo.style.display=window.scrollY>300?"block":"none";
};