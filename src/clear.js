export function clearElement(element) {
// While the element has a first child
while (element.firstChild) {
    // Remove the first child from the element
    element.removeChild(element.firstChild);
}

}
