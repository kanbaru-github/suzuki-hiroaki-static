import { setupCounter } from './_counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

document.addEventListener('DOMContentLoaded', () => {
  handleScroll();
});

/**
 * スムーススクロールを制御
 */
const handleScroll = () => {

}
