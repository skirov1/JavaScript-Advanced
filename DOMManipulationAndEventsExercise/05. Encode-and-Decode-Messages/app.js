function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName('button')[0];
    let inputText = document.getElementsByTagName('textarea')[0].value;
    
    encodeBtn.addEventListener('click', encode)

    function encode() {
        inputText = document.getElementsByTagName('textarea')[0].value;
        
        console.log(inputText);

        for (let index = 0; index < inputText.length; index++) {
            let currentCharValue = inputText[index].charCodeAt(0);

            console.log(currentCharValue);

            currentCharValue = String.fromCharCode(currentCharValue + 1);

            console.log(currentCharValue);
        }

        console.log(inputText);
    }

    
}