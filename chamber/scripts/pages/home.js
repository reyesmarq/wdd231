import { Layout } from '../components/Layout.js';

async function render() {
  document.getElementById('root').innerHTML = Layout({
    children: `
    <main class="main" id="main">
      <h1>Home</h1>
    </main>
  `,
  });
}

(async () => {
  await render();
})();
