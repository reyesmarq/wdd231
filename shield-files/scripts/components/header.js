import { loadCss } from '../utils/load-css.js';

export function Header() {
  loadCss('styles/modules/components/header.module.css');

  return `
    <header class="header">
      <nav class="nav">
        <a class="logo" href="#home">Shield Files</a>
        <div class="nav-links">
          <a href="#characters">Characters</a>
        </div>
      </nav>
    </header>
  `;
}
