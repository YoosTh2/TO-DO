import { clearElement } from "./clear.js";
import { lists } from "./saving.js";
import { caller } from "./index.js";

// MY DECLERATIONS ARE DOWN
export const containerList = document.querySelector("[data-lists]")
export const Local_Storage_Selected_List_Id_Key = 'task.selcetedListId';
export let selcetedListId = localStorage.getItem(
    Local_Storage_Selected_List_Id_Key
);

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

    if (list.id === selcetedListId) {
        listElement.classList.add("active_list")
    }

    // Appends the new 'li' element to the 'containerList' element
    containerList.appendChild(listElement);
});
}

containerList.addEventListener("click", e =>{
    if(e.target.tagName.toLowerCase() === "li"){
        selcetedListId = e.target.dataset.listId 
        caller()
    }
})


const deleteListBtn = document.querySelector("[data-delete-list-button]")
deleteListBtn.addEventListener("click", e =>{
    lists = lists.filter(list => list.id !== selcetedListId)
    selcetedListId = null
    caller()
})

