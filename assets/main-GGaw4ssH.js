import"./main-Denyk-jD.js";const h="/suzuki-hiroaki-static/img/icon-good-clicked.gif",g=()=>{const t=document.getElementById("js-resetGoodBtn");t==null||t.addEventListener("click",()=>{localStorage.removeItem("good-count"),location.reload()})},u=t=>{const e=localStorage.getItem("good-count");let i=e?parseInt(e,10):0;const s=(a,o)=>{i=a;const n=t.querySelector("span");n&&(n.textContent=i.toString());const c=t.querySelector("img");c&&o&&(c.src=h),localStorage.setItem("good-count",i.toString()),t.classList.contains("is-clicked")||(t.classList.add("is-clicked"),setTimeout(()=>{t.classList.remove("is-clicked")},1e3))};t&&(t.addEventListener("click",()=>s(i+1,!0)),s(i)),g()},l="/suzuki-hiroaki-static/img/icon-github.png";async function m(t){return(await(await fetch(`https://api.github.com/users/${t}/repos?sort=updated&direction=desc`)).json()).map(a=>({id:a.id,name:a.name,description:a.description,html_url:a.html_url}))}async function p(t){try{const e=await m(t),i=document.getElementById("js-repoList");i&&e.forEach(s=>{const a=document.createElement("li"),o=document.createElement("a");o.href=s.html_url,o.target="_blank";const n=document.createElement("div");n.textContent=s.name;const c=document.createElement("img");c.src=l;const r=document.createElement("p");r.textContent=s.description||"No description provided.",n.appendChild(r),o.appendChild(c),o.appendChild(n),a.appendChild(o),i.appendChild(a)})}catch(e){console.error("Error fetching repositories:",e)}}const k="/suzuki-hiroaki-static/img/icon-vite.svg",b="/suzuki-hiroaki-static/img/icon_Instagram.png",f="/suzuki-hiroaki-static/img/icon_x.png",v="/suzuki-hiroaki-static/img/icon_Facebook.png",_=()=>{document.querySelector("#header").innerHTML=`
    <header class="header" id="js-header">
      <a href="#" class="header__logo">
        <img src="${k}" alt="Vite">
        <h1>Suzuki Hiroaki</h1>
      </a>

      <button class="header__hamburger-btn" id="js-hamburgerBtn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="header__hamburger-nav" id="js-hamburgerMenu">
        <ul class="header__hamburger-nav-list">
          <li class="header__hamburger-nav-list-item">
            <a href="#">Top</a>
          </li>
          <li class="header__hamburger-nav-list-item">
            <a href="#introduction">Introduction</a>
          </li>
          <li class="header__hamburger-nav-list-item">
            <a href="#service">Service</a>
          </li>
          <li class="header__hamburger-nav-list-item">
            <a href="#skill">Skill</a>
          </li>
          <li class="header__hamburger-nav-list-item">
            <a href="#works">Works</a>
          </li>
          <li class="header__hamburger-nav-list-item">
            <a href="#blogs">blogs</a>
          </li>
          <li class="header__hamburger-nav-list-item">
            <p class="header__hamburger-nav-sns-list-title">Account</p>
            <ul class="header__hamburger-nav-sns-list">
              <li>
                <a href="https://www.instagram.com/kanbaru2024/" target="_blank">
                  <img src="${b}" alt="Instagram">
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kanbaru2024" target="_blank">
                  <img src="${f}" alt="X">
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100078000177599&locale=ja_JP" target="_blank">
                  <img src="${v}" alt="Facebook">
                </a>
              </li>
              <li>
                <a href="https://github.com/kanbaru-github" target="_blank">
                  <img src="${l}" alt="GitHub">
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  `};_();const E=()=>{document.querySelectorAll('a[href*="#"]').forEach(e=>{e.addEventListener("click",i=>{const s=e.hash,a=document.getElementById(s.slice(1)),o=document.getElementById("js-header");if(!s)i.preventDefault(),scrollTo({top:1,behavior:"smooth"});else if(a&&o){i.preventDefault();const n=a.getBoundingClientRect().top+scrollY-o.offsetHeight;scrollTo({top:n,behavior:"smooth"})}})})},d=()=>{const t=document.getElementById("js-toTopBtn");t&&scrollY===0?t.style.display="none":t&&(t.style.display="block")},y=()=>{const t=document.getElementById("js-hamburgerBtn"),e=document.getElementById("js-hamburgerMenu");t==null||t.addEventListener("click",()=>{t.classList.toggle("is-active"),e&&e.classList.toggle("is-active")}),e==null||e.addEventListener("click",()=>{t&&e&&(t.classList.toggle("is-active"),e.classList.toggle("is-active"))})},I=()=>{document.querySelectorAll(".js-accordionToggle").forEach(t=>{const e=(i,s)=>{i.classList.toggle("is-active"),i.classList.contains("is-active")?s.style.maxHeight=`${s.scrollHeight}px`:s.style.maxHeight="0px"};t.addEventListener("click",()=>{const i=t.nextElementSibling;i instanceof HTMLElement&&e(t,i)})})};E();d();y();p("kanbaru-github");I();u(document.getElementById("js-goodBtn"));window.addEventListener("scroll",d);
