import { NotFound } from './pages/not-found.js';
import { Home } from './pages/home.js';
import { SitePlan } from './pages/site-plan.js';
import { Characters } from './pages/characters.js';
import { charactersListener } from './listeners/characters.js';

// Define your routes and their corresponding components
const routes = {
  ['#home']: () => Home(),
  ['#site-plan']: () => SitePlan(),
  ['#characters']: async () => await Characters(),
};

// Get the content container
const app = document.getElementById('app');

// Function to render the route
async function renderRoute() {
  const path = window.location.hash.split('?')[0] || '#home';
  const queryParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const query = queryParams.get('query') || '';
  const page = parseInt(queryParams.get('page')) ?? 1;

  const renderContent = routes[path] || (() => NotFound());
  app.innerHTML = await renderContent();

  // event listeners
  charactersListener(query, page);
}

// Event listener for hash changes
window.addEventListener('hashchange', renderRoute);

// Initial render
renderRoute();
