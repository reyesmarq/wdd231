import { CharacterCard } from './character-card.js';
import { loadCss } from '../utils/load-css.js';
import { Characters } from '../featchers/characters.js';

export async function CharacterList(props) {
  loadCss('styles/modules/components/character-list.module.css');
  const query = props.query ?? undefined;
  const page = props.page ?? 1;

  const { data: characters, pagination } = await Characters.getMany({
    query,
    page,
  });

  return {
    characters: characters
      .map((character) => CharacterCard(character))
      .join(''),
    pagination,
  };
}
