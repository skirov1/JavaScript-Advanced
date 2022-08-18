function CalculateTime(steps, stepLength, speed) {
    let distance = (steps * stepLength * 100) / 100;
    let time = distance.toFixed() / (speed / 3.6) ;
    for (let i = 500; i <= distance; i+=500){
        time += 60;
    }
    

    let hours = Math.floor(time / 3600);
    let minutes =  Math.floor((time - (hours * 3600)) / 60)
    let secs = time - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (secs < 10) {secs = "0"+secs;}
    
    console.log(`${hours}:${minutes }:${secs.toFixed()}`);

}
