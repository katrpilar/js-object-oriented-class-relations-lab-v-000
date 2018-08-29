let driverIdCounter = 0;
let store = [{drivers:[], passengers: [],trips:[]}];
class Driver{
  constructor(name){
    this.name = name;
    this.id = ++driverIdCounter;
    this.trips = [];
  }
  store.drivers.push(this);
  // trips(){
  //   this
    // return store.drivers.filter(driv => {
    //   return item.userId === this.id
    // })
    // return store.find(driverId => this.id);
  // }
  passengers(){
    return store.find(passengers: driverId => this.id)
    // Needs to be filter not find
  }
}

let tripIdCounter = 0;
class Trip{
  constructor(driver, passenger){
    this.driver = driver;
    this.passenger = passenger;
    this.id = ++tripIdCounter;
    this.driverId
    this.passengerId
  }
  store.trips.push(this);

  driver(){
    store.drivers.find(function(element){
      return this.driverId == id;
    })
  }

  passengers(){
    return store.passengers.filter(element => tripId == this.id);
  }
}
