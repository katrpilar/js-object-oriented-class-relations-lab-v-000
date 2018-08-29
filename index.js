let driverIdCounter = 0
let store = {drivers:[], passengers: [],trips:[]}

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
    store.drivers.push(this);
  }
  passengers(){
    console.log(store.trips.filter(p => p.passengerId == this.id));
  }
  trips(){
    return store.trips.filter(t => t.driverId == this.id);
  }
}

//
let tripIdCounter = 0;
class Trip{
  constructor(driver, passenger){
    this.id = ++tripIdCounter
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)

  }

  setDriver(driver){
    this.driverId = driver.id
  }
  setPassenger(passenger){
    this.passengerId = passenger.id
  }
  driver(){
    return store.drivers.find(function(element){
      return element.id == this.driverId;
    })
  }

  passenger(){
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
    store.passengers.push(this);

  }

  trips(){
    console.log(store.trips.filter(t => t.passengerId == this.id));
  }

  drivers(){
    return store.trips.filter(t => t.driverId == this.id);
  }

}
