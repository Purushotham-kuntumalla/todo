let form = document.getElementById('form');
let button = document.getElementById('btn')
let ul = document.getElementById('list-group')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let listItem = document.getElementById('input').value;


    //create new list item to add a list to ul
    let newListItem = document.createElement('li');
    newListItem.className = 'list-group-item'
    newListItem.innerHTML = listItem
    newListItem.style.background = '#fff';
    newListItem.style.boxShadow = '0px 2px 2px 2px ';
    newListItem.style.borderRadius = '10px';
    newListItem.style.margin = '3px';
    newListItem.style.textAlign = 'center';
    //creating button to clear
    let clearButton = document.createElement('button');
    clearButton.className = 'btn btn-danger';
    clearButton.setAttribute('type', 'button')
    clearButton.innerHTML = 'X';
    //appending the clerabutton element to the li tag
    newListItem.appendChild(clearButton)

    //appending the list item to the ul tag
    ul.appendChild(newListItem)
})


//event for clear button
ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        let list = event.target.parentElement;
        ul.removeChild(list)
    }
    
})

let clearAll = document.getElementById('btn1');
clearAll.addEventListener('click', () => {
    let unOrderList = document.getElementById('list-group');
    unOrderList.remove()
    
})





