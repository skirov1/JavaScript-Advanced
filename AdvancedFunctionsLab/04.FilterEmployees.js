function solve(data, criteria) {
    data = JSON.parse(data);
    let propName, propValue;
    let counter = 0;
    

    if (criteria == 'all') {
        for (let employee of data) {
            console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
            counter++;
        }
    } else {
        [propName, propValue] = criteria.split('-');

        for (let employee of data) {
            if (employee[propName] == propValue) {
                console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
                counter++;
            }
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
  'gender-Female'
)