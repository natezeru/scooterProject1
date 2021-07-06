const User = require('../src/User')
const Scooter = require('../src/Scooter')


describe('User Object', () => {

const testUser = new User('verizon123@verizon.com', "5G1234", 23, 50.44, true)



    test('username is of type string', () => {
        expect(typeof testUser.username).toBe('string')
    })

    test('password is of type string' , () => {
        expect(typeof testUser.password).toBe('string')
    })

    test('age is a type integer', () => {
        expect(typeof testUser.age).toBe('number')
    })
    
    test('balance is a type integer', () => {
        expect(typeof testUser.balance).toBe("number")
    })

    test('renting is a type string', () => {
        expect(typeof testUser.renting).toBe("boolean")
    })
    
    test('make sure that email is in the correct format', () => {
        const email = testUser.username
        const indexOfAt = email.split('').indexOf('@')
        expect(email.slice(indexOfAt)).toBe('@verizon.com')
    })

    test('the changeUsername method changes the this.username property', () => {
        testUser.changeUsername('abc123@verizon.com')

        expect(testUser.username).toBe('abc123@verizon.com')
    })
    
    test('the updatedPassword method changes the this.password property', () => {
        testUser.changePassword('Kevin123')
        expect(testUser.password).toBe("Kevin123")
    })
    test('the isUserRenting method changes the this.renting property', () => {
        testUser.isUserRenting(true)
        expect(testUser.renting).toBe(true)
    })
   
    
})
