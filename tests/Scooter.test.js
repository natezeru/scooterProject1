

const Scooter = require('../src/Scooter')

test("Charging", async () => {
    const testScooter = new Scooter();
    await testScooter.chargingDetails()
    console.log("Charging Complete")
})