import { clearElement } from "./clear.js";

// MY DECLERATIONS ARE DOWN
const containerList = document.querySelector("[data-lists]")
const newListForm = document.querySelector("[data-new-list-form]")
const newListInput = document.querySelector("[data-new-list-input]")


// THE ARRAY IS DOWN
export let lists = [
//     {
//     id: "1",
//     name: "name"
// },
// {
//     id: "2",
//     name: "todo"
// }
]


// FUNCTION IS DOWN
export function render() {
    clearElement(containerList)
// Iterates over each item in the 'lists' array
lists.forEach(list => {
    // Creates a new 'li' element for each item
    const listElement = document.createElement("li");

    // Assigns the 'id' property of the 'list' object to the 'data-list-id' attribute of the 'listElement'
    listElement.dataset.listId = list.id;


    // Adds the 'active_list' class to the new 'li' element
    listElement.classList.add("active_list");

    // Sets the text of the 'li' element to the current item in the 'lists' array
    listElement.innerText = list.name;

    // Appends the new 'li' element to the 'containerList' element
    containerList.appendChild(listElement);
});

}