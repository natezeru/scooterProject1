const Technician = require('../src/Technician')

describe('Technician Object', () => {
    const testTechnician = new Technician(12345, "John Mansfield", "Dallas", "Complete", 'returned')
    
        test('id is of type number', () => {
            expect(typeof testTechnician.id).toBe('number')
        })
        
        test('name is a type of string', () => {
            expect(typeof testTechnician.name).toBe('string')

        })

        test('location is a type of string', () => {
            expect(typeof testTechnician.location).toBe('string')
        })

        test('repairStatus is a type of string', () => {
            expect(typeof testTechnician.repairStatus).toBe('string')

        })

        test('returnToStation is a type of string', () => {
            expect(typeof testTechnician.returnToStation).toBe('string')
        })


        test('this changeRepairStatus method changes the this.repairStatus property', () => {
            testTechnician.changeRepairStatus('Completed')
            expect(testTechnician.repairStatus).toBe('Completed')
        })

        test('this returnsToChargingStation method changes the this.retunToStation property', () =>{
            testTechnician.returnsToChargingStation("Returned")
            expect(testTechnican.returnToStation).toBe('Returned')
        })
})