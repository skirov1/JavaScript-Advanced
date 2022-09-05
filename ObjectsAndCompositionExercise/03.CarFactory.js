function assembleCar(car) {
    if (car.power <= 90) {     
        car['engine'] = {
            power : 90,
            volume : 1800
        }
    }
    else if (car.power > 90 && car.power <= 120) {
        car['engine'] = {
            power : 120,
            volume : 2400
        }
    }
    else if (car.power > 120 && car.power <= 200) {
        car['engine'] = {
            power : 200,
            volume : 3500
        }
    }

    if (car.carriage == 'hatchback') {
        car['carriage'] = {
            type : 'hatchback',
            color : car.color
        }
    }
    else if (car.carriage == 'coupe') {
        car['carriage'] = {
            type : 'coupe',
            color : car.color
        }
    }

    if (car.wheelsize % 2 == 0) {
        car.wheelsize--;      
    }

    car['wheels'] = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];     

    delete car.color;
    delete car.power;
    delete car.wheelsize;

    return car;
}