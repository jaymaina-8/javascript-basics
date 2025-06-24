// Define the blueprint of a car
class Car{

  // the constructor to initialise an object
  constructor(name,year,color, model) {
    this.color = color;
    this.model = model;
    this.year = year;
    this.name = name;
    this.isEngineOn = false;
  }
  // a method that is part of the class
  startEngine(){
    this.isEngineOn = true;
    console.log(`The ${this.name} ${this.model} is now running.`)
  }
  // display information
  displayInfo(){
    console.log(`The ${this.name} ${this.model} is a ${this.color} ${this.model} and was made in ${this.year}.`)
  }
}
// create an instance of that class
const myCar = new Car("BMW",2019,"red","X5");
myCar.startEngine();
myCar.displayInfo();


class plane{
  constructor(name,year,color, model){
    this.color = color;
    this.model = model;
    this.year = year;
    this.name = name;
    this.isEngineOn = false;
  }
}

