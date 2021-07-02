const Technician = require('../src/Technician')

describe('Technician Object', () => {
    const testTechnician = new Technician("LJSAK43256", "John Mansfield", "Dallas", "Complete", 'returned')
    
        test('id is of type string', () => {
            expect(typeof testTechnician.id).toBe('string')
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
            expect(testTechnician.returnToStation).toBe("Returned")
        })
        test('extract the last 5 digits of the serial number', () => {
            const serialNumber = testTechnician.id
            const indexOfAt = serialNumber.split('').indexOf('4')
            expect(serialNumber.slice(indexOfAt)).toBe('43256') })

})