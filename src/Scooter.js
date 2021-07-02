class Scooter{
    constructor(serial, charge, location, batteryLevel, condition){
        this.serial = serial
        this.charge = charge
        this.location = location
        
    }
    updateLocation(newLocation){
        this.location = newLocation
    }

    batteryLevelAmount(batteryLevel){
        if(batteryLevel > 100){
            console.log("Scooter is fully charged and ready to use !")
        }else{
            console.log("Scooter is not fully charged and not ready to use !")
        }
    }

    conditionOfScooter(currentCondition){
        
    }

    startRide(){

    }


    endRide(){


    }

    amountRode(){


    }
}

module.exports = Scooter