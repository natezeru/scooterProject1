class User{
    constructor(username, password, age,){
    this.username = username
    this.password = password
    this.age = age
    }

    changeUsername(updatedName){
        this.username = updatedName
    }

    changePassword(updatedPassword){
        this.password = updatedPassword
    }

    usersAge(age){
        if(age < 18){
            console.log("User must be above 18")
        }else{
           console.log("User is above 18")
        }
    }
    
    
}

module.exports = User
