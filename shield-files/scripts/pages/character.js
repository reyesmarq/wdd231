import { Layout } from '../components/layout.js';
import { Characters } from '../featchers/characters.js';
import { loadCss } from '../utils/load-css.js';

export async function Character(id) {
  loadCss('styles/modules/pages/character.module.css', [
    'styles/modules/pages/characters.module.css',
    'styles/modules/components/card.module.css',
    'styles/modules/components/character-list.module.css',
  ]);

  const data = await Characters.getOne(id);

  const { name, description, thumbnail, comics, stories, events, series } =
    data;
  const initialContent = Layout({
    children: `
      <div class="character-container">
        <div class="character-info">
          <div class="character-image">
            <img src="${thumbnail.path}.${thumbnail.extension}" alt="Character Name">
          </div>
          <div class="character-details">
            <h1>${name}</h1>
            <p>${description}</p>
          </div>
        </div>

        <div class="section">
          <h2>Comics</h2>
          <div class="item-list">
            ${comics.items
              .map((comic) => `<div class="item">${comic.name}</div>`)
              .join('')}
          </div>
        </div>

        <div class="section">
          <h2>Stories</h2>
          <div class="item-list">
            ${stories.items
              .map((story) => `<div class="item">${story.name}</div>`)
              .join('')}
          </div>
        </div>

        <div class="section">
          <h2>Events</h2>
          <div class="item-list">
            ${events.items
              .map((event) => `<div class="item">${event.name}</div>`)
              .join('')}
          </div>
        </div>

        <div class="section">
          <h2>Series</h2>
          <div class="item-list">
            ${series.items
              .map((series) => `<div class="item">${series.name}</div>`)
              .join('')}
          </div>
        </div>
      </div>
    `,
  });

  return initialContent;
}
