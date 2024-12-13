import { Home } from './pages/home.js';
import { SitePlan } from './pages/site-plan/site-plan.page.js';
import { NotFound } from './pages/not-found.js';

// Define your routes and their corresponding components
const routes = {
  ['#home']: () => `${Home()}`,
  ['#site-plan']: () => `${SitePlan()}`,
};

// Get the content container
const app = document.getElementById('app');

// Function to render the route
function renderRoute() {
  const path = window.location.hash || '#home';
  const renderContent = routes[path] || (() => `${NotFound()}`);
  app.innerHTML = renderContent();
}

// Event listener for hash changes
window.addEventListener('hashchange', renderRoute);

// Initial render
renderRoute();
