import goodClickedIcon from '/img/icon-good-clicked.gif';

export const handleGoodBtn = (element: HTMLElement) => {
  let counter = localStorage.getItem('good-count') ? parseInt(localStorage.getItem('good-count') || '0', 10) : 0;

  const setupCnt = (cnt: number, isClick?: boolean) => {
    counter = cnt;
    const spanElement = element?.querySelector('span');
    if (spanElement) {
      spanElement.textContent = counter.toString();
    }

    const imgElement = element?.querySelector('img');
    if (imgElement && isClick) {
      imgElement.src = goodClickedIcon;
    }

    localStorage.setItem('good-count', counter.toString());

    element.classList.add('is-clicked');
    setTimeout(() => {
      element.classList.remove('is-clicked');
    }, 1000);
  }
  element.addEventListener('click', () => setupCnt(counter + 1, true));
  setupCnt(counter);

  const resetBtn = document.getElementById('js-resetGoodBtn');
  resetBtn?.addEventListener('click', () => {
    localStorage.removeItem('good-count');
    location.reload();
  });
}
