import { loadCss } from '../utils/load-css.js';
import { Layout } from '../components/layout.js';
import { CharacterList } from '../components/character-list.js';

export async function Characters() {
  loadCss('styles/modules/pages/characters.module.css');

  const initialContent = Layout({
    children: `
      <main class="container">
        <div class="search-container">
          <input type="text" class="search-input" placeholder="Search Marvel characters...">
        </div>
        <div class="character-grid" id="character-grid">
          <p>Loading...</p>
        </div>
      </main>
    `,
  });

  CharacterList().then((characterList) => {
    document.getElementById('character-grid').innerHTML = characterList;
  });

  return initialContent;
}
