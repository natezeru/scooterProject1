

class User{
    constructor(username, password, email, address,  firstname , lastname, age){
    this.username = username
    this.password = password
    this.firstname = firstname
    this.email = email
    this.address = address
    this.lastname = lastname
    this.age = age
    
    
    }
   
    
    changeUsername(updatedName){
        this.username = updatedName
    }

    changePassword(updatedPassword){
        this.password = updatedPassword
    }


    scooterAppDownloaded() {
        return true
    }
     canUserRent(){
         
         if(this.age >= 18 && this.scooterAppDownloaded() === true){
             return true;
         }else{
             return false
         }
     }

     
}



module.exports = User