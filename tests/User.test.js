const User = require('../src/User')


describe('User Object', () => {

const testUser = new User('verizon123@verizon.com', '5G123')


    test('username is of type string', () => {
        expect(typeof testUser.username).toBe('string')
    })

    test('password is of type string' , () => {
        expect(typeof testUser.password).toBe('string')
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
})