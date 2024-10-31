import { Local_Storage_Selected_List_Id_Key } from "./render.js";
import { selcetedListId } from "./render.js";

// Defines a constant key for storing the task lists in local storage
const Local_Storage_List_Key = 'task.lists';

// Retrieves the task lists from local storage, parses the JSON string into a JavaScript array
// If there are no lists in local storage, it initializes 'lists' as an empty array
export let lists = JSON.parse(localStorage.getItem(Local_Storage_List_Key))|| [];

export function save() {
    localStorage.setItem(Local_Storage_List_Key , JSON.stringify(lists))
    localStorage.setItem(Local_Storage_Selected_List_Id_Key, selcetedListId)
}