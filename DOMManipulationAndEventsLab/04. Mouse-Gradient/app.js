function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let output = document.getElementById('result');

    gradient.addEventListener('mousemove', function(event) {
        let position = event.offsetX;
        let gradientWidth = event.target.offsetWidth - 1;

        let result = Math.trunc(position / gradientWidth * 100);

        output.textContent = result + '%';
    });

    gradient.addEventListener('mouseout', function(event) {
        output.textContent = '';
    });
}