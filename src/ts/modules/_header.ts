import viteIcon from '/img/icon-vite.svg';
import githubIcon from '/img/icon-github.png';
import { socialMediaLinks } from './_constant';

const headerSect = () => {
  document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
    <header class="header" id="js-header">
      <a href="#" class="header__logo">
        <img src="${viteIcon}" alt="Vite">
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
                  <img src="${githubIcon}" alt="GitHub">
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  `;

  const headerSnsList = document.querySelector<HTMLUListElement>('.header__hamburger-nav-sns-list');
  if (headerSnsList) {
    socialMediaLinks.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = '_blank';

      const icon = document.createElement('img');
      icon.src = link.src;
      icon.alt = link.alt;

      anchor.appendChild(icon);
      listItem.appendChild(anchor);
      headerSnsList.appendChild(listItem);
    });
  }
}

export default headerSect;
