import { CharacterList } from '../components/character-list.js';
import { Pagination } from '../components/pagination.js';

export function charactersListener(query, page) {
  async function updateCharacterList(query) {
    CharacterList({ query, page }).then((characterList) => {
      document.getElementById('character-grid').innerHTML =
        characterList.characters;
      document.getElementById('pagination').innerHTML = Pagination({
        ...characterList.pagination,
      });
    });
  }
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  if (searchInput && searchButton) {
    searchInput.value = query;
    searchButton.addEventListener('click', () => {
      searchInput.value = searchInput.value;
      const query = searchInput.value;
      window.location.hash = `#characters?query=${encodeURIComponent(query)}`;
      updateCharacterList(query);
    });

    updateCharacterList(query);
  }
}
