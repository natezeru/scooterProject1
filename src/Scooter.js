class Scooter{
    constructor(id){
        this.id = id
    }

    async chargingDetails(){
        console.log('Begining Charge');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Finished Charging");
    }
}

module.exports = Scooter