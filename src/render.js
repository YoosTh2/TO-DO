import { clearElement } from "./clear.js";
const containerList = document.querySelector("[data-lists]")
let lists = ["name", "todo"]
export function render() {
    clearElement(containerList)
// Iterates over each item in the 'lists' array
lists.forEach(list => {
    // Creates a new 'li' element for each item
    const listElement = document.createElement("li");

    // Adds the 'active_list' class to the new 'li' element
    listElement.classList.add("active_list");

    // Sets the text of the 'li' element to the current item in the 'lists' array
    listElement.innerText = list;

    // Appends the new 'li' element to the 'containerList' element
    containerList.appendChild(listElement);
});

}