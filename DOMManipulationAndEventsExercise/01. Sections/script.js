function create(words) {
   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.style.display = 'none';
      p.textContent = word;

      div.appendChild(p);
      div.addEventListener('click', displayP);

      function displayP(event) {
         event.target.children[0].style.display = 'block';
      }

      document.getElementById('content').appendChild(div);
   }
}