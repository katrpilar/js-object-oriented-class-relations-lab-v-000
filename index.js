let driverIdCounter = 0
let store = {drivers:[], passengers:[],trips:[]}

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
    return store.trips.filter(p => p.driverId === this.id);
  }
  trips(){
    return store.trips.filter(t => t.driverId === this.id);
  }
}

//
let tripIdCounter = 0;
class Trip{
  constructor(driver, passenger){
    this.id = ++tripIdCounter
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)

  }

  // driver() {
  // return store.drivers.find(driver => {
  //   return driver.id === this.driverId; //return statement
  // });
  //  }

  // driver(){
  //   return store.drivers.find(function(element){
  //     return element.id === this.driverId;
  //   })
  // }
  //

  // driver(){
  //   return store.drivers.find(function(element){
  //     return element.id === this.driverId;
  //   });
  // }

  // driver(){
  //   return store.drivers.find(driver => driver.id === this.driverId);
  // }

  // passenger(){
  //   return store.passengers.find(function(element){
  //     return element.id === this.passengerId;
  //   })
  // }

  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId);
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
    return store.trips.filter(t => t.passengerId === this.id);
  }

  drivers(){
    return store.trips.filter(t => t.driverId === this.id);
  }

}
