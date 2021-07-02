
const Scooter = require('../src/Scooter')

describe('Scooter Object', () => {
const testScooter = new Scooter(12345, "full", "Dallas")
    test('serial is a type of number', () => {
        expect(typeof testScooter.serial).toBe('number')
    })

    test('charge is a type of string', () => {
        expect(typeof testScooter.charge).toBe('string')
    })

    test('location is a type of string', () => {
        expect(typeof testScooter.location).toBe('string')
    })

    test('the updateLocation method changes this.location property', () => {
        testScooter.updateLocation('New York City')
        expect(testScooter.location).toBe('New York City')
    } )
})