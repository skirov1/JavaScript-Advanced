function Radar(speed, area) {

    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch(area){
        case "motorway": if(speed <= motorwayLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        } else {
            let difference = speed - motorwayLimit;
            CalculateSpeeding(difference, motorwayLimit)
        }
        break;

        case "interstate": if(speed <= interstateLimit) {
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        } else {
            let difference = speed - interstateLimit;
            CalculateSpeeding(difference, interstateLimit)
        } 
        break;

        case "city": if(speed <= cityLimit) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else {
            let difference = speed - cityLimit;
            CalculateSpeeding(difference, cityLimit)
        } 
        break;

        case "residential": if(speed <= residentialLimit) {
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        } else {
            let difference = speed - residentialLimit;
            CalculateSpeeding(difference, residentialLimit)
        } 
        break;
    }

    function CalculateSpeeding(difference, currentAreaLimit) {

        let status = "";
        
        if(difference <= 20) {
            status = "speeding";
        } else if(difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
    
    
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currentAreaLimit} - ${status}`);
    }
}
