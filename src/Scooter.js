const User = require("./User")

class Scooter extends User{
    constructor(username, password, age, balance, renting,  serial, batteryLevel, location, condition){
        super(username, password, age, balance, renting)
        this.serial = serial
        this.batteryLevel = batteryLevel
        this.location = location
        this.condition = condition
        
    }
    batteryStatus(chargeAmount){
        this.batteryLevel = chargeAmount
        if(chargeAmount === 100) {
            console.log('The scooter is fully charged')
        }else{
            console.log('scooter needs to be charged')
        }

    }

    conditionOfScooter(scooterCondtion){
        this.condition = scooterCondtion

        if(scooterCondtion === "good"){
            console.log('marked in good condtion, this can be rented')
        }else(scooterCondtion === "broken");{
            console.log('scooter is broken condition, this can not be rented')
        }
    }

    
}
module.exports = Scooter