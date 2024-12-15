import { loadCss } from '../utils/load-css.js';
import { Layout } from '../components/layout.js';

export async function Characters() {
  loadCss('styles/modules/pages/characters.module.css');

  const initialContent = Layout({
    children: `
      <main class="container">
        <div class="search-container">
          <input type="text" class="search-input" id="search-input" placeholder="Search Marvel characters...">
          <button class="search-button" id="search-button">Search</button>
        </div>
        <div class="character-grid" id="character-grid">
          <p>Loading...</p>
        </div>
        <div id="pagination"></div>
      </main>
    `,
  });

  return initialContent;
}
