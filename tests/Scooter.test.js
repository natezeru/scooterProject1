
const Scooter = require('../src/Scooter')

describe('Scooter Object', () => {
const testScooter = new Scooter(12345, "full", "Dallas", 100, "condition")
    test('serial is a type of number', () => {
        expect(typeof testScooter.serial).toBe('number')
    })

    test('charge is a type of string', () => {
        expect(typeof testScooter.charge).toBe('string')
    })

    test('location is a type of string', () => {
        expect(typeof testScooter.location).toBe('string')
    })

    test('batteryLevel is a type of integer' , () => {
        expect(typeof testScooter.batteryLevel).toBe('number')
    })
    
    test('the updateLocation method changes this.location property', () => {
        testScooter.updateLocation('New York City')
        expect(testScooter.location).toBe('New York City')
    } )

    test('the batteryLevelAmount method tells the user if scooter is fully charged and available' , () => {
        testScooter.batteryLevelAmount(44)
        expect(testScooter.batteryLevel).toBe(44)
    })
})