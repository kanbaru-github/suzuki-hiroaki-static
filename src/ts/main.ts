// import { setupCounter } from './_counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

document.addEventListener('DOMContentLoaded', () => {
  handleScroll();
});

/**
 * スムーススクロールを制御
 */
const handleScroll = (): void => {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]');
  links.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', (e: MouseEvent) => {
      const hash = link.hash;
      const target = document.getElementById(hash.slice(1));

      if (!hash) {
        e.preventDefault();
        scrollTo({
          top: 1,
          behavior: 'smooth',
        });
      } else if (target) {
        e.preventDefault();
        const position = target.getBoundingClientRect().top + scrollY;
        scrollTo({
          top: position,
          behavior: 'smooth',
        });
      }
    });
  });
}
