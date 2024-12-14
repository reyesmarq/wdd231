import { CharacterCard } from './character-card.js';
import { loadCss } from '../utils/load-css.js';
import { Characters } from '../featchers/characters.js';

export async function CharacterList() {
  loadCss('styles/modules/components/character-list.module.css');

  //const characters = [{ name: 'Captain America' }];
  const data = await Characters.getMany();
  const characters = data.data.results;

  return `
    ${characters.map((character) => CharacterCard(character)).join('')} 
  `;
}
