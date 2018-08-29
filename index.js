let driverIdCounter = 0;
let store = [{drivers:[], passengers: [],trips:[]}];

//{
// [drivers:
//   {id: 1, name: katrina},
//   {id: 2, name: kat}],
// [passengers:
//   {id: 1, name: david}],
// [trips:
//  {id: 1, tripId: 2, passengerId: 1 }]
// }

// + has many trips, and has many passengers through trips.

class Driver{
  constructor(name){
    this.name = name;
    this.id = ++driverIdCounter;
    // this.trips = [];
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
    return store.trips.filter(pass => pass.driverId == this.id);
    // Needs to be filter not find
  }
}

//
let tripIdCounter = 0;
class Trip{
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripIdCounter;
  }
  store.trips.push(this);

  driver(){
    store.drivers.find(function(element){
      return element.id == this.driverId;
    })
  }

  passenger(){
    // return store.passengers.filter(element => tripId == this.id);
    return store.passengers.find(function(element){
      return element.id == this.passengerId;
    })
  }
}

let passengerIdCounter = 0;
class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerIdCounter;
  }
  store.passengers.push(this);

}
