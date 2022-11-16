let form = document.getElementById("form")
let itemList = document.getElementById("items")
let deleteBtn = document.getElementById("deleteBtn")
let checkBox = document.querySelectorAll("input[type='checkbox']")

// Add item event listener
form.addEventListener("submit", addItems);
// Remove items
itemList.addEventListener("click", removeItems);

// Checkbox
for (let i=0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("change", completedTask)
}

// AddItems
function addItems(e) {
    e.preventDefault();

    //Get input value
    let itemValue = document.getElementById("add-item-input").value;

    // Create a new element(li)
    let li = document.createElement("li")

    // Add class 
    li.className = "item";

    // Add the input value to the li
    li.appendChild(document.createTextNode(itemValue))

    //Create a delete btn
    let delBtn = document.createElement("button")

    // Add attributes
    delBtn.className = "delete";
    delBtn.id = "deleteBtn";

    // Append the btn to the list
    li.appendChild(delBtn)

    // Create an i element
    let icon = document.createElement("i")

    // Add a class
    icon.className = "bi bi-trash3"

    // Append it on the btn
    delBtn.appendChild(icon)

    // Create an input field
    let input = document.createElement("input")

    // Add attributes
    input.setAttribute("type", "checkbox")

    // Append the input in li
    // li.appendChild(input)
    li.prepend(input)


    // Append li to the list
    itemList.appendChild(li)
}


function removeItems(e) {
    if (e.target.classList == "bi bi-trash3") {
        // Remove the item
        let list = e.target.parentElement.parentElement

        // Remove the list
        itemList.removeChild(list)
    }
    
}

function completedTask(e) {
    if(this.checked) {
        e.target.parentElement.style.textDecoration = "line-through"
    }
    else{
        e.target.parentElement.style.textDecoration = "none"
    }

    
}