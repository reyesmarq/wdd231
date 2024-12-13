import { loadCss } from '../utils/load-css.js';

export function SitePlan() {
  loadCss('styles/modules/pages/site-plan.module.css');

  return `
    <header>
      <h1>Shield files - Site Plan</h1>
    </header>
    <main>
      <section id="site-name">
        <h2>1. Site Name</h2>
        <p><strong>SHIELD Files</strong></p>
        <p>
          The name directly ties to the Marvel Universe, representing a secretive and well-organized archive, much like the fictional S.H.I.E.L.D. agency. It evokes intrigue and aligns perfectly with the idea of a comprehensive Marvel wiki.
        </p>
      </section>

      <section id="site-purpose">
        <h2>2. Site Purpose</h2>
        <p>
          The purpose of S.H.I.E.L.D. Files is to provide Marvel fans with a detailed and interactive database of characters, events, affiliations, and trivia. Users can explore profiles, search for specific heroes or villains, and learn more about the interconnected Marvel Universe in an easy-to-navigate format. S.H.I.E.L.D. Files aims to provide an engaging and comprehensive resource for Marvel enthusiasts. Our website will offer:
        </p>
        <ul>
          <li>
            Detailed information about Marvel characters, their powers, and their backstories.
          </li>
          <li>
            An interactive database for exploring team affiliations, story arcs, and major Marvel events.
          </li>
          <li>
            Educational resources to help new fans understand the Marvel Universe
          </li>
        </ul>
      </section>

      <section id="scenarios">
        <h2>3. Scenarios</h2>
        <div class="scenario">
          <h3>Scenario 1:</h3>
          <p>
            "I want to learn about the powers and backstory of Spider-Man."
          </p>
          <ul>
            <li>
              Users can navigate to a "Heroes" section or search for "Spider-Man" to view his profile.
            </li>
          </ul>
        </div>
        <div class="scenario">
          <h3>Scenario 2:</h3>
          <p>
            "Which team affiliations has Captain America been part of?"
          </p>
          <ul>
            <li>
              Users can explore a "Teams" section or use filters to view characters by their affiliations.
            </li>
          </ul>
        </div>
      </section>

      <section id="color-schema">
        <h2>4. Color Schema</h2>
        <div class="color-sample primary">
          <p>#e23636 (Hero Red)</p>
          <p>Used for headings and accents</p>
        </div>
        <div class="color-sample black">
          <p>#202020 (Deep Charcoal)</p>
          <p>used for primary text and background</p>
        </div>
        <div class="color-sample white">
          <p>#ffffff (Pure White)</p>
          <p>used for background and text highlights</p>
        </div>
        <div class="color-sample soft-gray">
          <p>#cccccc (Soft Gray)</p>
          <p>used for borders and secondary text</p>
        </div>
        <div class="color-sample light-gray">
          <p>#f4f4f4 (Light Mist)</p>
          <p>used for background and subtle dividers</p>
        </div>
      </section>

      <section id="typography">
        <h2>5. Typography</h2>
        <div class="font-sample heading-font">
          <p>Rubik</p>
          <p>Used for headings</p>
        </div>
        <div class="font-sample body-font">
          <p>Roboto mono</p>
          <p>Used for body text</p>
        </div>
      </section>

      <section id="wireframe">
        <h2>6. Wireframe</h2>
        <div class="wireframe-container">
          <div class="wireframe mobile">
            <h3>Mobile View</h3>
            <img src="images/wireframe-mobile.png" alt="Mobile Wireframe">
          </div>
          <div class="wireframe desktop">
            <h3>Desktop View</h3>
            <img src="images/wireframe-desktop.png" alt="Desktop Wireframe">
          </div>
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Shield files - Site Plan</p>
    </footer>
  `;
}
