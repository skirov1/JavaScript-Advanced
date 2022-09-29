function addItem() {
    let text = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.innerText = text;

    document.getElementById('items').appendChild(li);
}