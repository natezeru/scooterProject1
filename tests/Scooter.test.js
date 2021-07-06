
const Scooter = require('../src/Scooter')

describe('Scooter Object', () => {
    let testScooter = new Scooter('fasdfdsa', 'fdafds', 19, 56.11, true, 44322, 90, "NYC", "good")



    test('serial is a type number', () => {
        expect(typeof testScooter.serial).toBe('number')
    })

    test('location is a type string', () => {
        expect(typeof testScooter.location).toBe('string')
    })
    
    test('batteryLevel is type number', () => {
        expect(typeof testScooter.batteryLevel).toBe('number')
    })

    test('condition is type string', () => {
        expect(typeof testScooter.condition).toBe('string')
    })
    test('the batteryStatus method changes the batteryLevel property ', () => {
        testScooter.batteryStatus(100)
        expect(testScooter.batteryLevel).toBe(100)
    })


})

let testScooter = new Scooter('dfadsf', "dsafdas33", 56, 78.11, true, 53232, 100, "LAX", "good")
console.log(testScooter)