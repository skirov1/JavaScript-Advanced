function search() {
   let list = document.getElementById('towns');
   let towns = list.getElementsByTagName('li')
   let townToSearch = document.getElementById('searchText').value;
   let matches = 0;

   for (let town of towns) {
      town.style.fontWeight = 'normal'
      town.style.textDecoration = ''
   }

   for (let town of towns) {
      let text = town.textContent;

      if(text.match(townToSearch)) {
         matches++;
         town.style.fontWeight = 'bold'
         town.style.textDecoration = 'underline'
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`
}
