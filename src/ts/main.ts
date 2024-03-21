import { handleGoodBtn } from "./modules/_counter";
import { displayRepositories } from "./modules/_github";

/**
 * スムーススクロールを制御
 */
const handleScroll = (): void => {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]');
  links.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', (e: MouseEvent) => {
      const hash = link.hash;
      const target = document.getElementById(hash.slice(1));
      const header = document.getElementById('js-header');

      if (!hash) {
        e.preventDefault();
        scrollTo({
          top: 1,
          behavior: 'smooth',
        });
      } else if (target && header) {
        e.preventDefault();
        const position = target.getBoundingClientRect().top + scrollY - header.offsetHeight;
        scrollTo({
          top: position,
          behavior: 'smooth',
        });
      }
    });
  });
}

/**
 * トップに戻るボタン制御
 */
const handleToTopBtn = (): void => {
  const toTopBtn: HTMLElement | null = document.getElementById('js-toTopBtn');

  if (toTopBtn && scrollY === 0) {
    toTopBtn.style.display = 'none';
  } else if (toTopBtn) {
    toTopBtn.style.display = 'block';
  }
}

const handleHamburgerMenu = () => {
  const hamburgerBtn: HTMLElement | null = document.getElementById('js-hamburgerBtn');
  const hamburgerMenu = document.getElementById('js-hamburgerMenu');
  hamburgerBtn?.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('is-active');
    if (hamburgerMenu) {
      hamburgerMenu.classList.toggle('is-active');
    }
  });
  hamburgerMenu?.addEventListener('click', () => {
    if (hamburgerBtn && hamburgerMenu) {
      hamburgerBtn.classList.toggle('is-active');
      hamburgerMenu.classList.toggle('is-active');
    }
  });
}

/**
 * ブログのアコーディオンを制御
 */
const handleAccordion = () => {
  document.querySelectorAll<HTMLElement>('.js-accordionToggle').forEach(elem => {
    const toggleAccordion = (element: HTMLElement, content: HTMLElement) => {
      element.classList.toggle('is-active');
      if (element.classList.contains('is-active')) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '0px';
      }
    };
    elem.addEventListener('click', () => {
      const content = elem.nextElementSibling;
      if (content instanceof HTMLElement) {
        toggleAccordion(elem, content);
      }
    });
  });
}

handleScroll();
handleToTopBtn();
handleHamburgerMenu();
displayRepositories('kanbaru-github');
handleAccordion();
handleGoodBtn(document.getElementById('js-goodBtn')!);

window.addEventListener('scroll', handleToTopBtn);
