import { loadCss } from '../utils/load-css.js';

export function CharacterCard({ name }) {
  loadCss('styles/modules/components/card.module.css');

  return `
    <div class="character-card">
      <img src="https://placehold.co/200x200" alt="Captain America" class="character-image">
      <div class="character-info">
        <h2 class="character-name">${name}</h2>
        <p class="character-description">Genius billionaire Tony Stark</p>
      </div>
    </div>
  `;
}
