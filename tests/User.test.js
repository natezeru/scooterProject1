const User = require('../src/User')



describe('User Object', () => {

const testUser = new User("natezeru1", "password!!", "nzeru13@gmail.com", "123 Honey Ln", "Nate", "Zeru", 11)

const testUser2 = new User("smithboen2", "mypassword2!!", "smithboen7@gmail.com", "432 Wonka Dr", "Smith", "Boen", 26)

    test('username is of type string', () => {
        expect(typeof testUser.username).toBe('string')
    })

    test('password is of type string' , () => {
        expect(typeof testUser.password).toBe('string')
    })

    test('age is a type integer', () => {
        expect(typeof testUser.age).toBe('number')
    })

    test('the changeUsername method changes the this.username property', () => {
        testUser.changeUsername('natezeru1')

        expect(testUser.username).toBe('natezeru1')
    })
    
    test('the updatedPassword method changes the this.password property', () => {
        testUser.changePassword('password!!')
        expect(testUser.password).toBe("password!!")
    })
    
    test("is app downloaded", () => {
        expect(testUser.scooterAppDownloaded()).toBe(true)
        expect(testUser2.scooterAppDownloaded()).toBe(true)
    })
    test("is user eligible to rent", () => {
        expect(testUser.canUserRent()).toBe(false)
        expect(testUser2.canUserRent()).toBe(true)
    })

    test('is the user registerd ?', () => {
        expect(testUser.username).toBe("natezeru1")
        expect(testUser.password).toBe("password!!")
        expect(testUser.email).toBe("nzeru13@gmail.com")
        expect(testUser.address).toBe("123 Honey Ln")
        expect(testUser.firstname).toBe("Nate")
        expect(testUser.lastname).toBe("Zeru")
        expect(testUser.age).toBe(11)
        
        expect(testUser2.username).toBe("smithboen2")
        expect(testUser2.password).toBe("mypassword2!!")
        expect(testUser2.email).toBe("smithboen7@gmail.com")
        expect(testUser2.address).toBe("432 Wonka Dr")
        expect(testUser2.firstname).toBe("Smith")
        expect(testUser2.lastname).toBe("Boen")
        expect(testUser2.age).toBe(26)
    })
})
