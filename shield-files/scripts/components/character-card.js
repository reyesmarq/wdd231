import { loadCss } from '../utils/load-css.js';

export function CharacterCard({ name, thumbnail, description }) {
  loadCss('styles/modules/components/card.module.css');

  return `
    <div class="character-card">
      <img src="${thumbnail.path}.${thumbnail.extension}" alt="${name}" class="character-image">
      <div class="character-info">
        <h2 class="character-name">${name}</h2>
        <p class="character-description">${description ? description : 'No description available'}</p>
      </div>
    </div>
  `;
}
