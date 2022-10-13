function validate() {
    let inputField = document.getElementById('email');
    let text = inputField.value;

    inputField.addEventListener('change', onChange);

    let emailPattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    function onChange() {
        text = inputField.value;
        console.log(text);
        if(emailPattern.test(text)) {
            inputField.classList.remove('error');
            return;
        } 
        inputField.className = 'error';
    }
    
}