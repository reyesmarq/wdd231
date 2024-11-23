import { Footer } from './_Footer.js';
import { Header } from './Header.js';

/** @typedef {{ children: string }} Props */
export function Layout({ children }) {
  return `
    ${Header()}
    ${children}
    ${Footer()}
  `;
}
