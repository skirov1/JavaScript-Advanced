function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;

    let tableCells = document.querySelectorAll('#customers td:nth-child(2)');    

    let deleted = false;

    for (let cell of tableCells) {

        if (email == cell.textContent) {
            cell.parentElement.remove();
            deleted = true;
        }

        if (deleted) {
            document.getElementById('result').textContent = 'Deleted.'
        } else {
            document.getElementById('result').textContent = 'Not found.'
        }
    }
}