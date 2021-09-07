import { html } from "./preactPlusHtm.js";

const header = 'Header rendered from App!';

export function App () {
    return html`
      <h2>${header}</h2>
    `
}

