class Scooter{
    constructor(serial, charge, location, batteryLevel, condition){
        this.serial = serial
        this.charge = charge
        this.location = location
        this.batteryLevel = batteryLevel
    }
    updateLocation(newLocation){
        this.location = newLocation
    }

    batteryLevelAmount(currentAmount){
        this.batteryLevel = currentAmount
    }

    conditionOfScooter(currentCondition){
        this.condition = currentCondition
    }

    startRide(){

    }


    endRide(){


    }

    amountRode(){


    }
}

module.exports = Scooter