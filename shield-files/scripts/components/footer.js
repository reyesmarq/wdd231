import { loadCss } from '../utils/load-css.js';

export function Footer() {
  loadCss('styles/modules/components/footer.module.css');

  return `
    <footer class="footer">
      <p>&copy; 2023 Shield Files. All rights reserved.</p>
    </footer>
  `;
}
