import { CharacterCard } from './character-card.js';
import { loadCss } from '../utils/load-css.js';
import { Characters } from '../featchers/characters.js';

export function CharacterList() {
  loadCss('styles/modules/components/character-list.module.css');

  const characters = [{ name: 'Captain America' }];

  return `
    ${characters.map((character) => CharacterCard(character)).join('')} 
  `;
}
