import { NotFound } from './pages/not-found.js';
import { Home } from './pages/home.js';
import { SitePlan } from './pages/site-plan.js';
import { Characters } from './pages/characters.js';

// Definition of the routes and components matching
const routes = {
  ['#home']: () => Home(),
  ['#site-plan']: () => SitePlan(),
  ['#characters']: async () => await Characters(),
};

// Get the content container
const app = document.getElementById('app');

// Function to render the route
async function renderRoute() {
  const path = window.location.hash || '#home';
  const renderContent = routes[path] || (() => NotFound());
  app.innerHTML = await renderContent();
}

// Event listener for hash changes
window.addEventListener('hashchange', renderRoute);

// Initial render
renderRoute();
