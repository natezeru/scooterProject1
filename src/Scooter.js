class Scooter{
    constructor(serial, charge, location){
        this.serial = serial
        this.charge = charge
        this.location = location
    }
    updateLocation(newLocation){
        this.location = newLocation
    }

    
}

module.exports = Scooter