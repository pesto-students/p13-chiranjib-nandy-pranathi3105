class Vehicle{
    constructor(make,model,year,color)
    {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive()
    {
        console.log(`Driving : ${this.make} ${this.model}`) 
    }
}
class Car extends Vehicle{
    constructor(make, model, year,color,numSeats)
    {
        super(make, model, year,color);
        this.numSeats = numSeats;
        console.log(`Number of Seats: ${this.numSeats}` )
    }
}
class RideShareCar extends Car
{
    constructor(make, model, year,color,numSeats,isAvailable)
    {
        super(make, model, year,color,numSeats);
        this.isAvailable = isAvailable;
        console.log(`isAvailable: ${this.isAvailable}` )
    }
}

var Vehicle1 = new RideShareCar('Ford','Fusion',2017,'Red',7,true);
Vehicle1.drive();
