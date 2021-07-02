const User = require('../src/User')


describe('User Object', () => {

const testUser = new User('verizon123@verizon.com', '5G123', 23)


    test('username is of type string', () => {
        expect(typeof testUser.username).toBe('string')
    })

    test('password is of type string' , () => {
        expect(typeof testUser.password).toBe('string')
    })

    test('age is a type integer', () => {
        expect(typeof testUser.age).toBe('number')
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

    test('userAge method returns message depending on user age' , () => {
        testUser.usersAge(23)
        expect(testUser.age).toBe(23)
    })
})