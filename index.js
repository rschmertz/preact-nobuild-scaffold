// Dowmloaded from https://unpkg.com/htm/preact/standalone.module.js 
// as suggested at https://github.com/developit/htm
import { html, render } from "./preactPlusHtm.js";
import { App } from "./App.js"

render(html`<${App} name="World" />`, document.getElementById('root'));