import viteIcon from '/img/icon-vite.svg';
import instagramIcon from '/img/icon_Instagram.png';
import xIcon from '/img/icon_x.png';
import facebookIcon from '/img/icon_Facebook.png';
import githubIcon from '/img/icon-github.png';

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
                <a href="https://www.instagram.com/kanbaru2024/" target="_blank">
                  <img src="${instagramIcon}" alt="Instagram">
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kanbaru2024" target="_blank">
                  <img src="${xIcon}" alt="X">
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100078000177599&locale=ja_JP" target="_blank">
                  <img src="${facebookIcon}" alt="Facebook">
                </a>
              </li>
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
}

export default headerSect;
