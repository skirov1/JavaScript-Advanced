function toggle() {

    if (document.getElementsByClassName('button')[0].textContent == 'Less') {
        document.getElementsByClassName('button')[0].textContent = 'More'
        document.getElementById('extra').style.display = 'none';
    } else {
        document.getElementById('extra').style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less'
    }
}