import { Layout } from '../components/Layout.js';
import { Box } from '../components/Box.js';

async function render() {
  document.getElementById('root').innerHTML = Layout({
    children: `
    <main class="main" id="main">
      <div class="flex-container">
      ${Box(
        {
          title: 'Events',
        },
        { classToAdd: 'flex:grow' },
      )}
      ${Box({
        title: 'Current Weather',
        imageSrc:
          'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png',
        body: `
          <div class="d:flex">
            <p class="line:height:large"><span class="font:bold">75°</span>F</p>
            <p class="line:height:large">Party cloudy</p>
            <p class="line:height:large">High: 85°</p>
            <p class="line:height:large">Low: 52°</p>
            <p class="line:height:large">Humidity: 34%</p>
            <p class="line:height:large">Sunrise: 7:30am</p>
            <p class="line:height:large">Sunset: 9:59pm</p>
          </div>
        `,
      })}
      ${Box({
        title: 'Weather Forecast',
        body: `
          <div class="d:flex">
            <p class="line:height:large font:size:medium">Today: <span class="font:bold">90°</span></p>
            <p class="line:height:large font:size:medium">Wednesday: <span class="font:bold">89°</span></p>
            <p class="line:height:large font:size:medium">Thursday: <span class="font:bold">68°</span></p>
          </div>
        `,
      })}
      </div>
    </main>
  `,
  });
}

(async () => {
  await render();
})();
