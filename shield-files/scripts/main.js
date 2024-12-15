import { NotFound } from './pages/not-found.js';
import { Home } from './pages/home.js';
import { SitePlan } from './pages/site-plan.js';
import { Characters } from './pages/characters.js';
import { Character } from './pages/character.js';
import { charactersListener } from './listeners/characters.js';

// Define your routes and their corresponding components
const routes = {
  ['#home']: () => Home(),
  ['#site-plan']: () => SitePlan(),
  //['#characters']: async (id) =>
  //  id ? await Characters(id) : await Characters(),
  ['#characters']: async () => await Characters(),
  ['#characters/:id']: async () => await Character(),
};

// Get the content container
const app = document.getElementById('app');

// Function to render the route
async function renderRoute() {
  const path = window.location.hash.split('?')[0] || '#home';
  // TODO: need to find out a better way to handle this
  const [_, id] = window.location.hash.split('/');
  if (id) {
    app.innerHTML = await routes['#characters/:id'](id);
    return;
  }

  const searchParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const query = searchParams.get('query') || '';
  const page = parseInt(searchParams.get('page')) || 1;
  const renderContent = routes[path] || (() => NotFound());
  app.innerHTML = await renderContent(1);

  // event listeners
  charactersListener(query, page);
}

// Event listener for hash changes
window.addEventListener('hashchange', renderRoute);

// Initial render
renderRoute();
