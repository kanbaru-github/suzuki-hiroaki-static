import"./main-CaAFXIln.js";const d="/suzuki-hiroaki-static/img/icon-github.png";async function m(t){return(await(await fetch(`https://api.github.com/users/${t}/repos?sort=updated&direction=desc`)).json()).map(n=>({id:n.id,name:n.name,description:n.description,html_url:n.html_url}))}async function p(t){try{const e=await m(t),i=document.getElementById("js-repoList");i&&e.forEach(s=>{const n=document.createElement("li"),o=document.createElement("a");o.href=s.html_url,o.target="_blank";const c=document.createElement("div");c.textContent=s.name;const a=document.createElement("img");a.src=d;const l=document.createElement("p");l.textContent=s.description||"No description provided.",c.appendChild(l),o.appendChild(a),o.appendChild(c),n.appendChild(o),i.appendChild(n)})}catch(e){console.error("Error fetching repositories:",e)}}const h=()=>{document.querySelectorAll('a[href*="#"]').forEach(e=>{e.addEventListener("click",i=>{const s=e.hash,n=document.getElementById(s.slice(1)),o=document.getElementById("js-header");if(!s)i.preventDefault(),scrollTo({top:1,behavior:"smooth"});else if(n&&o){i.preventDefault();const c=n.getBoundingClientRect().top+scrollY-o.offsetHeight;scrollTo({top:c,behavior:"smooth"})}})})},r=()=>{const t=document.getElementById("js-toTopBtn");t&&scrollY===0?t.style.display="none":t&&(t.style.display="block")},u=()=>{const t=document.getElementById("js-hamburgerBtn"),e=document.getElementById("js-hamburgerMenu");t==null||t.addEventListener("click",()=>{t.classList.toggle("is-active"),e&&e.classList.toggle("is-active")}),e==null||e.addEventListener("click",()=>{t&&e&&(t.classList.toggle("is-active"),e.classList.toggle("is-active"))})};h();r();u();p("kanbaru-github");window.addEventListener("scroll",r);
