class Technician{
  constructor(id, name, location, repairStatus, returnToStation){
      this.id = id
      this.name = name
      this.location = location
      this.repairStatus = repairStatus
      this.returnToStation = returnToStation
  }
  changeRepairStatus(updatedRepairStatus){
      this.repairStatus = updatedRepairStatus
  }
  returnsToChargingStation(returnCompleted){
      this.returnToStation = returnCompleted
  }

}

module.exports = Technician