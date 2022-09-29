function focused() {
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener('focus', function (event) {
            event.target.parentElement.classList.add('focused');
        } )

        input.addEventListener('blur', function (event) {
            event.target.parentElement.classList.remove('focused');
        } )
    }
}