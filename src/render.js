import { clearElement } from "./clear.js";
const containerList = document.querySelector("[data-lists]")
let lists = ["name", "todo"]
export function render() {
    clearElement(containerList)
    lists.forEach(list => {
        const listElement = document.createElement("li")
        listElement.classList.add("active_list")
        listElement.innerText = list
        containerList.appendChild(listElement)
    });
}