import { parse } from 'postcss';
import './main.css';
import './style.css';
// import * as something from "./declarations.js"|
console.log("just testing if it is working my index.js")
// My Imports of functions/moduels are here
import { clearElement } from "./clear.js";
import { render } from "./render.js";
import { createList } from "./listCreation";
import { lists } from './render.js';
console.log(createList())

// EVENT LISTENERS ARE DOWN
const newListForm = document.querySelector("[data-new-list-form]")
const newListInput = document.querySelector("[data-new-list-input]")

newListForm.addEventListener("submit", e =>{
    e.preventDefault()
    const listName = newListInput.value 
    if (listName == null || listName === "") return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})


// CALLS
// render()