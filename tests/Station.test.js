const Station = require('../src/Scooter')

describe("Station", () => {
    const testScooter1 = new Station(5, 34)
    const testScooter2 = new Station(0, 11)

    test('are there any scooters available and rentabe', () =>{
        expect(testScooter1.checkoutScooter()).toBe("Scooter has been rented")
        expect(testScooter2.checkoutScooter()).toBe("No more scooters")
    })


    test('has the scooter been returned', () => {
        expect(testScooter1.returnScooter()).toBe(true)
        expect(testScooter2.returnScooter()).toBe(false)
    })

    test('has the user been charged', () => {
        expect(testScooter1.billUser()).toBe("Payment is pending")
        expect(testScooter2.billUser()).toBe(false)
    })
})