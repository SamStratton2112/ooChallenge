class Vehicle{
    constructor(make, model, year){
    this.make =make;
    this.model=model;
    this.year=year;
    }
    honk(){
        return 'BEEEEEEEP';
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}
class Car extends Vehicle{
    constructor(make,model,year){
    super(make,model,year);
    this.numWheels=4;
    }
}

class Motercycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels=2;
        }
    revEngine(){
        return "VROOOOOOOOM!!!!!"
    }
}

class Garage{
    constructor(capacity){
        this.vehicles=[];
        this.capacity= capacity;
    }
    add(newCar){
        if(!(newCar instanceof Vehicle)){
            return "Only vehicles are allowed"
        }
        if(this.vehicles.length>=capacity){
            return "Sorry, we're full!"
        }
        this.vehicles.push(newCar);
        return "Vehicle added!"
    }
}