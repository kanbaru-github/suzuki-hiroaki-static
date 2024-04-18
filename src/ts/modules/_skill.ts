import HTMLIcon from '/img/icon-html5.svg';
import SassIcon from '/img/icon-sass.svg';
import PHPIcon from '/img/icon-php.svg';
import TypeScriptIcon from '/img/icon-typescript.svg';
import ViteIcon from '/img/icon-vite.svg';
import LaravelIcon from '/img/icon-laravel.svg';
import NextJsIcon from '/img/icon-next-js.svg';
import AWSIcon from '/img/icon-aws.svg';
import DockerIcon from '/img/icon-docker.svg';
import RubyOnRailsIcon from '/img/icon-ruby-on-rails.svg';
import PythonIcon from '/img/icon-python.svg';
import JavaIcon from '/img/icon-java.svg';

type Skill = {
  href: string;
  src: string;
  caption: string;
}

const skillSect = () => {
  const skills: Skill[] = [
    {
      href: 'https://developer.mozilla.org/ja/docs/Web/HTML',
      src: HTMLIcon,
      caption: 'HTML',
    },
    {
      href: 'https://sass-lang.com/',
      src: SassIcon,
      caption: 'Sass',
    },
    {
      href: 'https://www.php.net/',
      src: PHPIcon,
      caption: 'PHP',
    },
    {
      href: 'https://www.typescriptlang.org/',
      src: TypeScriptIcon,
      caption: 'TypeScript',
    },
    {
      href: 'https://vitejs.dev/',
      src: ViteIcon,
      caption: 'Vite',
    },
    {
      href: 'https://laravel.com/',
      src: LaravelIcon,
      caption: 'Laravel',
    },
    {
      href: 'https://nextjs.org/',
      src: NextJsIcon,
      caption: 'Next.js',
    },
    {
      href: 'https://aws.amazon.com/jp/',
      src: AWSIcon,
      caption: 'AWS',
    },
    {
      href: 'https://www.docker.com/ja-jp/',
      src: DockerIcon,
      caption: 'Docker',
    },
    {
      href: 'https://rubyonrails.org/',
      src: RubyOnRailsIcon,
      caption: 'Ruby on Rails',
    },
    {
      href: 'https://www.python.org/',
      src: PythonIcon,
      caption: 'Python',
    },
    {
      href: 'https://www.java.com/ja/',
      src: JavaIcon,
      caption: 'Java',
    },
  ];

  document.querySelector('#skill')!.innerHTML = `
    <h2>Skill</h2>
    <ul class="skill__tech-list">
      ${skills.map(skill => `
        <li>
          <a href="${skill.href}" target="_blank">
            <figure>
              <img src="${skill.src}" alt="${skill.caption}">
              <figcaption>${skill.caption}</figcaption>
            </figure>
          </a>
        </li>
      `).join('')}
    </ul>
  `;
}

export default skillSect;
