import"./main-Denyk-jD.js";const p="/suzuki-hiroaki-static/img/icon-good-clicked.gif",d=()=>{const t=document.getElementById("js-resetGoodBtn");t==null||t.addEventListener("click",()=>{localStorage.removeItem("good-count"),location.reload()})},u=t=>{const e=localStorage.getItem("good-count");let a=e?parseInt(e,10):0;const o=(s,i)=>{a=s;const c=t.querySelector("span");c&&(c.textContent=a.toString());const n=t.querySelector("img");n&&i&&(n.src=p),localStorage.setItem("good-count",a.toString()),t.classList.contains("is-clicked")||(t.classList.add("is-clicked"),setTimeout(()=>{t.classList.remove("is-clicked")},1e3))};t&&(t.addEventListener("click",()=>o(a+1,!0)),o(a)),d()},l="/suzuki-hiroaki-static/img/icon-github.png";async function f(t){return(await(await fetch(`https://api.github.com/users/${t}/repos?sort=updated&direction=desc`)).json()).map(s=>({id:s.id,name:s.name,description:s.description,html_url:s.html_url}))}async function k(t){try{const e=await f(t),a=document.getElementById("js-repoList");a&&e.forEach(o=>{const s=document.createElement("li"),i=document.createElement("a");i.href=o.html_url,i.target="_blank";const c=document.createElement("div");c.textContent=o.name;const n=document.createElement("img");n.src=l;const r=document.createElement("p");r.textContent=o.description||"No description provided.",c.appendChild(r),i.appendChild(n),i.appendChild(c),s.appendChild(i),a.appendChild(s)})}catch(e){console.error("Error fetching repositories:",e)}}const h="/suzuki-hiroaki-static/img/icon-vite.svg",b="/suzuki-hiroaki-static/img/icon_Instagram.png",_="/suzuki-hiroaki-static/img/icon_x.png",v="/suzuki-hiroaki-static/img/icon_Facebook.png",g=[{alt:"Instagram",href:"https://www.instagram.com/kanbaru2024/",src:b},{alt:"X",href:"https://twitter.com/kanbaru2024",src:_},{alt:"Facebook",href:"https://www.facebook.com/profile.php?id=100078000177599&locale=ja_JP",src:v}],y=()=>{document.querySelector("#header").innerHTML=`
    <header class="header" id="js-header">
      <a href="#" class="header__logo">
        <img src="${h}" alt="Vite">
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
                <a href="https://github.com/kanbaru-github" target="_blank">
                  <img src="${l}" alt="GitHub">
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  `;const t=document.querySelector(".header__hamburger-nav-sns-list");t&&g.forEach(e=>{const a=document.createElement("li"),o=document.createElement("a");o.href=e.href,o.target="_blank";const s=document.createElement("img");s.src=e.src,s.alt=e.alt,o.appendChild(s),a.appendChild(o),t.appendChild(a)})},I=()=>{document.querySelector("#footer").innerHTML=`
    <footer class="footer">
      <div class="footer__ref">
        <h3>引用元:</h3>
        <ul class="footer__ref-list">
          <li>
            <a target="_blank" href="https://icons8.com/icon/sXm12ie1GUjg/laptop-coding">Coding</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/lBuqhXfGV2RT/windows10-%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%A9%E3%82%A4%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3">Windows10-パーソナライゼーション</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/57926/guarantee">保証</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/20909/html-5">HTML5</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/QBqFNfPPB2Kx/sass">生意気な</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/fAMVO_fuoOuC/php-logo">PHP ロゴ</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/github">GitHub</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/2744/thumbs-up">いいね</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/38ZV6IzOptX3/thumbs-up">いいね</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/33039/amazon-web-services">アマゾンウェブサービス</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/cdYUlRaag9G9/docker">デッカー</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/yUdJlcKanVbh/next.js">nextjs</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/ZMFmFsekpKfY/ruby-on-rails">ルビーオンレール</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/13441/python">Python</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/13679/java">Java Coffee Cupのロゴ</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
        </ul>
      </div>

      <p class="footer__contact">お問い合わせはSNSのDMまでお願いいたします。</p>
      <ul class="footer__contact-list"></ul>

      <small class="footer__copy-right">
        ©︎Suzuki Hiroaki All rights reserved.
      </small>
    </footer>
  `;const t=document.querySelector(".footer__contact-list");t&&g.forEach(e=>{const a=document.createElement("li"),o=document.createElement("a");o.href=e.href,o.target="_blank";const s=document.createElement("img");s.src=e.src,s.alt=e.alt,o.appendChild(s),a.appendChild(o),t.appendChild(a)})},E="/suzuki-hiroaki-static/img/icon-html5.svg",w="/suzuki-hiroaki-static/img/icon-sass.svg",S="/suzuki-hiroaki-static/img/icon-php.svg",L="/suzuki-hiroaki-static/img/icon-typescript.svg",j="/suzuki-hiroaki-static/img/icon-laravel.svg",C="/suzuki-hiroaki-static/img/icon-next-js.svg",B="/suzuki-hiroaki-static/img/icon-aws.svg",z="/suzuki-hiroaki-static/img/icon-docker.svg",H="/suzuki-hiroaki-static/img/icon-ruby-on-rails.svg",T="/suzuki-hiroaki-static/img/icon-python.svg",x="/suzuki-hiroaki-static/img/icon-java.svg",q=()=>{const t=[{href:"https://developer.mozilla.org/ja/docs/Web/HTML",src:E,caption:"HTML"},{href:"https://sass-lang.com/",src:w,caption:"Sass"},{href:"https://www.php.net/",src:S,caption:"PHP"},{href:"https://www.typescriptlang.org/",src:L,caption:"TypeScript"},{href:"https://vitejs.dev/",src:h,caption:"Vite"},{href:"https://laravel.com/",src:j,caption:"Laravel"},{href:"https://nextjs.org/",src:C,caption:"Next.js"},{href:"https://aws.amazon.com/jp/",src:B,caption:"AWS"},{href:"https://www.docker.com/ja-jp/",src:z,caption:"Docker"},{href:"https://rubyonrails.org/",src:H,caption:"Ruby on Rails"},{href:"https://www.python.org/",src:T,caption:"Python"},{href:"https://www.java.com/ja/",src:x,caption:"Java"}];document.querySelector("#skill").innerHTML=`
    <h2>Skill</h2>
    <ul class="skill__tech-list">
      ${t.map(e=>`
        <li>
          <a href="${e.href}" target="_blank">
            <figure>
              <img src="${e.src}" alt="${e.caption}">
              <figcaption>${e.caption}</figcaption>
            </figure>
          </a>
        </li>
      `).join("")}
    </ul>
  `};y();q();I();const A=()=>{document.querySelectorAll('a[href*="#"]').forEach(e=>{e.addEventListener("click",a=>{const o=e.hash,s=document.getElementById(o.slice(1)),i=document.getElementById("js-header");if(!o)a.preventDefault(),scrollTo({top:1,behavior:"smooth"});else if(s&&i){a.preventDefault();const c=s.getBoundingClientRect().top+scrollY-i.offsetHeight;scrollTo({top:c,behavior:"smooth"})}})})},m=()=>{const t=document.getElementById("js-toTopBtn");t&&scrollY===0?t.style.display="none":t&&(t.style.display="block")},M=()=>{const t=document.getElementById("js-hamburgerBtn"),e=document.getElementById("js-hamburgerMenu");t==null||t.addEventListener("click",()=>{t.classList.toggle("is-active"),e&&e.classList.toggle("is-active")}),e==null||e.addEventListener("click",()=>{t&&e&&(t.classList.toggle("is-active"),e.classList.toggle("is-active"))})},P=()=>{document.querySelectorAll(".js-accordionToggle").forEach(t=>{const e=(a,o)=>{a.classList.toggle("is-active"),a.classList.contains("is-active")?o.style.maxHeight=`${o.scrollHeight}px`:o.style.maxHeight="0px"};t.addEventListener("click",()=>{const a=t.nextElementSibling;a instanceof HTMLElement&&e(t,a)})})};A();m();M();k("kanbaru-github");P();u(document.getElementById("js-goodBtn"));window.addEventListener("scroll",m);
