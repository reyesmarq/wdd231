/// <reference path="../types.d.ts" />
(async () => {
  const URL = 'https://reyesmarq.github.io/wdd231/chamber/data/members.json';
  const response = await fetch(URL);
  let isGrid = true;

  /** @type {Member[]} */
  const data = await response.json();

  const membersContainer = document.getElementById('members-container');

  /** @type {string} */
  const membersHtml = buildMembersHtmlFrom({
    type: isGrid ? 'grid' : 'list',
    data,
  });

  membersContainer.innerHTML = membersHtml;

  document.getElementById('main').addEventListener('click', (event) => {
    if (!event.target.dataset['listType']) {
      return;
    }
    if (
      (isGrid && event.target.dataset['listType'] === 'grid') ||
      (!isGrid && event.target.dataset['listType'] === 'list')
    ) {
      return;
    }

    isGrid = !isGrid;
    const membersHtml = buildMembersHtmlFrom({
      type: isGrid ? 'grid' : 'list',
      data,
    });
    membersContainer.innerHTML = membersHtml;
    if (event.target.tagName === 'IMG') {
      event.target.parentElement.classList.toggle('is-active');
      const siblingElement =
        event.target.parentElement.nextElementSibling ||
        event.target.parentElement.previousElementSibling;
      siblingElement.classList.toggle('is-active');
    }
  });
})();

const listType = {
  grid: buildMembersHtmlGrid,
  list: buildMembersHtmlList,
};

function buildMembersHtmlFrom({ type, data }) {
  return listType[type](data);
}

/** @param {Member[]} data */
function buildMembersHtmlGrid(data) {
  const membersHtmlInGrid = data
    .map((member) => {
      const { name, phone, website, image, industry } = member;
      return `
      <div class="card">
        <div class="card__header">
          <h1 class="card__title">${name}</h1>
          <h2 class="card__subtitle">${industry}</h2>
        </div>
        <div class="card__body">
          <img src="images/${image}" alt="${name}" class="card__image">
          <div class="card__info">
            <p><span class="card__info-label">Email:</span>email@domain.com</p>
            <p><span class="card__info-label">Phone:</span>${phone}</p>
            <p><span class="card__info-label">Website:</span>${website}</p>
          </div>
        </div>
      </div>
    `;
    })
    .join('');
  const membersHtml = `
    <div class="cards-container">
      ${membersHtmlInGrid}
    </div>
  `;
  return membersHtml;
}

/** @param {Member[]} data */
function buildMembersHtmlList(data) {
  const tHeadHtmlContent = `
    <tr>
      <th>Company name</th>
      <th>Address</th>
      <th>Phone number</th>
      <th>website</th>
    </tr>
  `;
  const tBodyHtmlContent = data
    .map((member) => {
      const { name, address, phone, website } = member;
      return `
      <tr>
        <td>${name}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td>${website}</td>
      </tr>
    `;
    })
    .join('');

  const membersHtmlInList = `
    <table>
      <thead>
        ${tHeadHtmlContent}
      </thead>
      <tbody>
        ${tBodyHtmlContent}
      </tbody>
    </table>
  `;

  return membersHtmlInList;
}
