function FindPreviousDay(year, month, day) {

    let date = new Date(`${year}-${month}-${day}`);

    let previousDate = new Date(date);

    previousDate.setDate(date.getDate() - 1);

    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth() + 1}-${previousDate.getDate()}`);  
}
