import { loadCss } from '../utils/load-css.js';

export function Home() {
  loadCss('styles/modules/pages/home.module.css');

  return `
    <header>
      <nav>
        <div class="logo">Shield Files</div>
        <div class="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Shield Files</h1>
          <p>Unlock the Marvel Universe with our powerful API interaction tool</p>
          <a href="#" class="cta-button">Get Started</a>
        </div>
      </section>

      <section id="features" class="features">
        <h2>Features</h2>
        <div class="feature-grid">
          <div class="feature">
            <h3>Character Database</h3>
            <p>Access detailed information on thousands of Marvel characters</p>
          </div>
          <div class="feature">
            <h3>Comic Explorer</h3>
            <p>Discover and browse through Marvel's vast comic collection</p>
          </div>
          <div class="feature">
            <h3>Timeline Tracker</h3>
            <p>Follow character appearances and story arcs across different series</p>
          </div>
          <div class="feature">
            <h3>API Integration</h3>
            <p>Seamlessly interact with the Marvel API for up-to-date information</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 Shield Files. All rights reserved.</p>
    </footer>
  `;
}
