import"./main-CBVWv15F.js";const d="/suzuki-hiroaki-static/img/icon-github.png";async function m(t){return(await(await fetch(`https://api.github.com/users/${t}/repos?sort=updated&direction=desc`)).json()).map(s=>({id:s.id,name:s.name,description:s.description,html_url:s.html_url}))}async function h(t){try{const e=await m(t),n=document.getElementById("js-repoList");n&&e.forEach(o=>{const s=document.createElement("li"),i=document.createElement("a");i.href=o.html_url,i.target="_blank";const c=document.createElement("div");c.textContent=o.name;const l=document.createElement("img");l.src=d;const a=document.createElement("p");a.textContent=o.description||"No description provided.",c.appendChild(a),i.appendChild(l),i.appendChild(c),s.appendChild(i),n.appendChild(s)})}catch(e){console.error("Error fetching repositories:",e)}}const p=()=>{document.querySelectorAll('a[href*="#"]').forEach(e=>{e.addEventListener("click",n=>{const o=e.hash,s=document.getElementById(o.slice(1)),i=document.getElementById("js-header");if(!o)n.preventDefault(),scrollTo({top:1,behavior:"smooth"});else if(s&&i){n.preventDefault();const c=s.getBoundingClientRect().top+scrollY-i.offsetHeight;scrollTo({top:c,behavior:"smooth"})}})})},r=()=>{const t=document.getElementById("js-toTopBtn");t&&scrollY===0?t.style.display="none":t&&(t.style.display="block")},g=()=>{const t=document.getElementById("js-hamburgerBtn"),e=document.getElementById("js-hamburgerMenu");t==null||t.addEventListener("click",()=>{t.classList.toggle("is-active"),e&&e.classList.toggle("is-active")}),e==null||e.addEventListener("click",()=>{t&&e&&(t.classList.toggle("is-active"),e.classList.toggle("is-active"))})},u=()=>{document.querySelectorAll(".js-accordionToggle").forEach(t=>{const e=(n,o)=>{n.classList.toggle("is-active"),n.classList.contains("is-active")?o.style.maxHeight=`${o.scrollHeight}px`:o.style.maxHeight="0px"};t.addEventListener("click",()=>{const n=t.nextElementSibling;n instanceof HTMLElement&&e(t,n)})})};p();r();g();h("kanbaru-github");u();window.addEventListener("scroll",r);
