function colorize() {
    const table = document.querySelector("table");

    const rows = table.querySelectorAll('tr');

    for(let row = 1; row < rows.length; row+=2) {
        rows[row].style.backgroundColor = 'Teal'
    }
}