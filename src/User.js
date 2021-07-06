

class User{
    constructor(username, password, age, balance, renting){
    this.username = username
    this.password = password
    this.age = age
    this.balance = balance
    this.renting = renting
    
    
    
    }
   
    
    changeUsername(updatedName){
        this.username = updatedName
    }

    changePassword(updatedPassword){
        this.password = updatedPassword
    }

     isUserRenting(status){
         this.renting = status
         if(status === true){
             console.log('User is renting scooter');
         }else{
             console.log('User is not renting scooter')
         }
     }
}



module.exports = User