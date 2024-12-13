import { Footer } from './footer.js';
import { Header } from './header.js';

/** @typedef {{ children: string }} Props */
export function Layout({ children }) {
  return `
    ${Header()}
    ${children}
    ${Footer()}
  `;
}
