import"./main-Denyk-jD.js";const d="/suzuki-hiroaki-static/img/icon-good-clicked.gif",g=()=>{const t=document.getElementById("js-resetGoodBtn");t==null||t.addEventListener("click",()=>{localStorage.removeItem("good-count"),location.reload()})},m=t=>{const e=localStorage.getItem("good-count");let o=e?parseInt(e,10):0;const n=(s,c)=>{o=s;const i=t.querySelector("span");i&&(i.textContent=o.toString());const l=t.querySelector("img");l&&c&&(l.src=d),localStorage.setItem("good-count",o.toString()),t.classList.contains("is-clicked")||(t.classList.add("is-clicked"),setTimeout(()=>{t.classList.remove("is-clicked")},1e3))};t&&(t.addEventListener("click",()=>n(o+1,!0)),n(o)),g()},u="/suzuki-hiroaki-static/img/icon-github.png";async function p(t){return(await(await fetch(`https://api.github.com/users/${t}/repos?sort=updated&direction=desc`)).json()).map(s=>({id:s.id,name:s.name,description:s.description,html_url:s.html_url}))}async function h(t){try{const e=await p(t),o=document.getElementById("js-repoList");o&&e.forEach(n=>{const s=document.createElement("li"),c=document.createElement("a");c.href=n.html_url,c.target="_blank";const i=document.createElement("div");i.textContent=n.name;const l=document.createElement("img");l.src=u;const a=document.createElement("p");a.textContent=n.description||"No description provided.",i.appendChild(a),c.appendChild(l),c.appendChild(i),s.appendChild(c),o.appendChild(s)})}catch(e){console.error("Error fetching repositories:",e)}}const f=()=>{document.querySelectorAll('a[href*="#"]').forEach(e=>{e.addEventListener("click",o=>{const n=e.hash,s=document.getElementById(n.slice(1)),c=document.getElementById("js-header");if(!n)o.preventDefault(),scrollTo({top:1,behavior:"smooth"});else if(s&&c){o.preventDefault();const i=s.getBoundingClientRect().top+scrollY-c.offsetHeight;scrollTo({top:i,behavior:"smooth"})}})})},r=()=>{const t=document.getElementById("js-toTopBtn");t&&scrollY===0?t.style.display="none":t&&(t.style.display="block")},E=()=>{const t=document.getElementById("js-hamburgerBtn"),e=document.getElementById("js-hamburgerMenu");t==null||t.addEventListener("click",()=>{t.classList.toggle("is-active"),e&&e.classList.toggle("is-active")}),e==null||e.addEventListener("click",()=>{t&&e&&(t.classList.toggle("is-active"),e.classList.toggle("is-active"))})},y=()=>{document.querySelectorAll(".js-accordionToggle").forEach(t=>{const e=(o,n)=>{o.classList.toggle("is-active"),o.classList.contains("is-active")?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight="0px"};t.addEventListener("click",()=>{const o=t.nextElementSibling;o instanceof HTMLElement&&e(t,o)})})};f();r();E();h("kanbaru-github");y();m(document.getElementById("js-goodBtn"));window.addEventListener("scroll",r);