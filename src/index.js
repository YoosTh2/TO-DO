import { parse } from 'postcss';
import './main.css';
import './style.css';
// import * as something from "./declarations.js"
//Here goes my declarations
const input_todo = document.getElementById("todo_text")
const plus_todo = document.getElementById("add_plus_btn") 
const alert_todo = document.getElementById("Alert")
const list_todo = document.getElementById("list_items")
//Here they end

let todo = JSON.parse(localStorage.getItem("todo_list"))
if (!todo) {
    todo = []
}

console.log("just testing if it is working my index.js")


