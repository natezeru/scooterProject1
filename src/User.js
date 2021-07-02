class User{
    constructor(username, password){
    this.username = username
    this.password = password
    }

    changeUsername(updatedName){
        this.username = updatedName
    }

    changePassword(updatedPassword){
        this.password = updatedPassword
    }
}

module.exports = User
