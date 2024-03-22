import goodClickedIcon from '/img/icon-good-clicked.gif';

/**
 * ローカルストレージのGoodカウントをリセット及びリロード
 */
const resetGoodCnt = () => {
  const resetBtn = document.getElementById('js-resetGoodBtn');
  resetBtn?.addEventListener('click', () => {
    localStorage.removeItem('good-count');
    location.reload();
  });
}

/**
 * Goodカウントをローカルストレージを用いて制御
 * @param element - Goodボタン
 */
export const handleGoodBtn = (element: HTMLElement) => {
  const goodCnt = localStorage.getItem('good-count');
  let counter = goodCnt ? parseInt(goodCnt, 10) : 0;

  const setupCnt = (cnt: number, isClick?: boolean) => {
    counter = cnt;
    const spanElement = element.querySelector('span');
    if (spanElement) {
      spanElement.textContent = counter.toString();
    }

    const imgElement = element.querySelector('img');
    if (imgElement && isClick) {
      imgElement.src = goodClickedIcon;
    }

    localStorage.setItem('good-count', counter.toString());

    if (!element.classList.contains('is-clicked')) {
      element.classList.add('is-clicked');
      setTimeout(() => {
        element.classList.remove('is-clicked');
      }, 1000);
    }
  }

  if (element) {
    element.addEventListener('click', () => setupCnt(counter + 1, true));
    setupCnt(counter);
  }

  resetGoodCnt();
}
