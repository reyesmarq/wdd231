import { loadCss } from '../utils/load-css.js';

export function Header() {
  loadCss('styles/modules/components/header.module.css');

  return `
    <header class="header">
      <nav class="nav">
        <div class="logo">Shield Files</div>
        <div class="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  `;
}