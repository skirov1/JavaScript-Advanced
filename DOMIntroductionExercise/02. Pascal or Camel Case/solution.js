function solve() {
  let text = document.getElementById('text').value;
  let result = '';
  let namingCase = document.getElementById('naming-convention').value;

  if (namingCase == 'Camel Case'){
    result = toCamelCase(text)
  }else if (namingCase == 'Pascal Case'){
    result = toPascalCase(text)
  }else {
    result = 'Error!'
  }

  document.getElementById('result').textContent = result;

  function toCamelCase(str){
    return str.split(' ').map(function(word,index){
      // If it is the first word make sure to lowercase all the chars.
      if(index == 0){
        return word.toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }

  function toPascalCase(str){
    (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
  }
}