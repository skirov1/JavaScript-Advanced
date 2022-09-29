function addItem() {
    let text = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.innerText = text;
    document.getElementById('items').appendChild(li);

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove();
    })

    li.appendChild(deleteBtn);

}