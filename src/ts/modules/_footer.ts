import { socialMediaLinks } from "./_constant";

const footerSect = () => {

  document.querySelector<HTMLDivElement>('#footer')!.innerHTML = `
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
  `;

  const footerContactList = document.querySelector<HTMLUListElement>('.footer__contact-list');
  if (footerContactList) {
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
      footerContactList.appendChild(listItem);
    });
  }
}

export default footerSect;
