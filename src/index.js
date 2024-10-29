import { parse } from 'postcss';
import './main.css';
import './style.css';
// import * as something from "./declarations.js"|
console.log("just testing if it is working my index.js")
// My Imports are here
import { clearElement } from "./clear.js";
import { render } from "./render.js";

// console.log(clearElement())
// I'll start from here I'll make the declerations here

const containerList = document.querySelector("[data-lists]")

render()
