const Scooter = require("../src/Scooter")

class Station {
    constructor(numberOfStations, scootersAvailable){
        this.numberOfStations = numberOfStations
        this.scootersAvailable = scootersAvailable
    }

    checkoutScooter(){
        if(this.scootersAvailable > 0){
            return "Scooter has been rented"
        } else {
            return "No more scooters"
        }
    }

    returnScooter(){
        if(this.checkoutScooter() === "Scooter has been rented"){
            return true
        } else {
            return false
        
            
        }
    }

    billUser(){
        if(this.returnScooter() === true){
            return "Payment is pending"
        } else{
            return false
        }
    }
}

module.exports = Station